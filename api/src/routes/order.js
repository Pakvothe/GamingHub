require('dotenv').config();
const server = require('express').Router();
const { Order, Product, Orders_products, Review, Serial } = require('../db.js');
const { isAuthenticated, isAdmin } = require('../../utils/customMiddlewares');
const mercadopago = require('mercadopago');
const paypal = require('paypal-rest-sdk');
const { toIsoStringOffset, delayedDays, sendMail } = require('../../utils/functions.js');
const { mailOrderCompleted, mailOrderInProcess } = require('../../utils/mails');
const { NGROK_LINK, MP_KEY } = process.env;

mercadopago.configure({
	access_token: MP_KEY
});

paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': 'AVeYMMLna52Rv9-1uIw3TGzGlNPco4klRBayFg_LG3dTpuWX8LfvIz6tJz3WBXDkh-xy47kjX2wjYm7i',
	'client_secret': 'EFydCj0OOb5RA11v372v4L6t0XLYr9qDDYHi4PyG79uodbS-cjfZt6_bubU836mCuyX2jZg8AKQivpXh'
});

var webhooks = {
	"url": NGROK_LINK + '/orders/paypalNotification',
	"event_types": [{
		"name": "PAYMENT.SALE.COMPLETED"
	}]
};

paypal.notification.webhook.create(webhooks, function (err, webhook) {
	if (err) {
		console.log(err.response);
	} else {
		console.log("Created webhook");
		console.log(webhook);
	}
});

//----------"/orders"--------------

server.post('/paypal', async (req, res) => {
	const order = req.body;
	const { products } = order;
	delete order.products;

	let idOrder;
	Order.create(order)
		.then(createdOrder => {
			idOrder = createdOrder.id;
			let formattedProducts = products.map(prod => {
				return {
					productId: prod.id,
					orderId: idOrder,
					unit_price: prod.price,
					quantity: prod.quantity
				}
			});
			return Orders_products.bulkCreate(formattedProducts, { individualHooks: true })
		})
		.then(() => Order.findOne({
			where: { id: idOrder },
			include: [
				Product
			]
		}))
		.then(async updatedOrder => {
			const items = products.map(item => ({
				name: item.name,
				price: item.price.toFixed(2),
				quantity: item.quantity,
				currency: 'USD'
			}))
			const order = JSON.stringify({
				intent: "sale",
				payer: { payment_method: "paypal" },
				redirect_urls: {
					return_url: "http://localhost:4000/orders/paypalRedirect",
					cancel_url: "http://localhost:3000/"
				},
				transactions: [{
					item_list: { items },
					amount: {
						currency: "USD",
						total: req.body.total_amount.toFixed(2)
					},
					description: "Gaminghub"
				}]
			})

			paypal.payment.create(order, async function (error, payment) {
				if (error) {
					console.log(error)
					return res.status(500).json({ message: "Internal server error" })
				} else {
					console.log("Create Payment Response");
					console.log(payment)
					await updatedOrder.update({ paypal_id: payment.id, payment_link: payment.links[1].href });
					mailOrderInProcess(updatedOrder);
					return res.json(payment.links[1].href);
				}
			})
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({ message: "Internal server error" })
		})
});

server.get('/paypalRedirect', async (req, res) => {
	const payer_id = req.query.PayerID;
	const paymentId = req.query.paymentId;
	const order = await Order.findOne({ where: { paypal_id: paymentId }, include: [Product] });
	const executePaymentJson = JSON.stringify({
		payer_id,
		transactions: [{
			amount: {
				currency: 'USD',
				total: order.get().total_amount.toFixed(2)
			}
		}]
	});
	const fourDaysAgo = new Date(new Date() - 96 * 60 * 60 * 1000);
	if (fourDaysAgo > order.createdAt) {
		res.redirect('http://localhost:3000');
	} else {
		paypal.payment.execute(paymentId, executePaymentJson, async function (error, payment) {
			if (error) {
				return res.redirect('http://localhost:3000');
			} else {
				if (payment.state === 'approved') {
					const updatedOrder = await order.update({ state: 'completed', payment_link: null })
					let serialsArray = [];
					for (let prod of order.products) {
						prod = prod.get();
						serialsArray.push(await Serial.findAll({
							where: { productId: prod.id },
							limit: prod.orders_products.quantity,
							raw: true
						}))
					}
					let serialsToInactive = serialsArray.reduce((acc, ser) => {
						ser.map(s => acc.push(s.serial))
						return acc;
					}, []);

					await Serial.update({ is_active: false }, {
						where: { serial: serialsToInactive },
						individualHooks: true
					});

					const productSerial = serialsArray.reduce((acc, ser) => {
						ser.map(s => acc.push({ serial: s.serial, productId: s.productId }))
						return acc;
					}, [])

					mailOrderCompleted(updatedOrder, productSerial);
					return res.redirect(`http://localhost:3000/order/detail?status=${order.state}&order=${order.id}`)
				} else return res.redirect('http://localhost:3000');
			}
		})
	}
});

server.post('/paypalNotification', async (req, res) => {
	res.sendStatus(200);
	console.log(req.query)
	console.log(req.body)
	paypal.payment.get(req.body.resource.parent_payment, async (error, payment) => {
		if (error) return console.log(error);
		if (payment === 'approved') {
			const order = await Order.findOne({ where: { paypal_id: payment.id }, include: [Product] })
			if (order.state === 'completed') return;
			else {
				const fourDaysAgo = new Date(new Date() - 96 * 60 * 60 * 1000);
				if (fourDaysAgo > order.createdAt) {
					paypal.payment.execute(paymentId, executePaymentJson, async function (error, payment) {
						if (error) {
							return res.redirect('http://localhost:3000');
						} else {
							if (payment.state === 'approved') {
								const updatedOrder = await order.update({ state: 'completed', payment_link: null })
								let serialsArray = [];
								for (let prod of order.products) {
									prod = prod.get();
									serialsArray.push(await Serial.findAll({
										where: { productId: prod.id },
										limit: prod.orders_products.quantity,
										raw: true
									}))
								}
								let serialsToInactive = serialsArray.reduce((acc, ser) => {
									ser.map(s => acc.push(s.serial))
									return acc;
								}, []);

								await Serial.update({ is_active: false }, {
									where: { serial: serialsToInactive },
									individualHooks: true
								});

								const productSerial = serialsArray.reduce((acc, ser) => {
									ser.map(s => acc.push({ serial: s.serial, productId: s.productId }))
									return acc;
								}, [])

								mailOrderCompleted(updatedOrder, productSerial);
								return res.redirect(`http://localhost:3000/order/detail?status=${order.state}&order=${order.id}`)
							}
						}
					})
				}
			}
		}
	});
});

server.post('/', async (req, res) => {
	const order = req.body;
	const { products } = order;
	delete order.products;

	let idOrder;
	Order.create(order)
		.then(createdOrder => {
			idOrder = createdOrder.id;
			let formattedProducts = products.map(prod => {
				return {
					productId: prod.id,
					orderId: idOrder,
					unit_price: prod.price,
					quantity: prod.quantity
				}
			});
			return Orders_products.bulkCreate(formattedProducts, { individualHooks: true })
		})
		.then(() => Order.findOne({
			where: { id: idOrder },
			include: [
				Product
			]
		}))
		.then(async updatedOrder => {
			let expiryDate = delayedDays(new Date(), 4);
			let preference = {
				items: updatedOrder.products.map(product => ({
					title: product.name,
					unit_price: order.discount ?
						product.orders_products.unit_price * (1 - (order.discount / 100))
						:
						(product.orders_products.unit_price),
					quantity: product.orders_products.quantity,
					currency_id: 'USD'
				})),
				back_urls: {
					success: 'http://localhost:4000/orders/mercadoPago',
					failure: 'http://localhost:4000/orders/mercadoPago',
					pending: 'http://localhost:4000/orders/mercadoPago'
				},
				auto_return: "approved",
				notification_url: `${NGROK_LINK}/orders/mercadoPagoNotifications`,
				expires: true,
				expiration_date_to: toIsoStringOffset(expiryDate)
			};

			const resp = await mercadopago.preferences.create(preference)
			updatedOrder.update({ mp_id: resp.response.id, payment_link: resp.body.init_point })

			mailOrderInProcess(updatedOrder);

			return res.json(resp.body.init_point)
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({ message: "Internal server error" })
		})
});

server.get('/mercadoPago', async (req, res) => {

	try {
		const order = await Order.findOne({
			where: {
				mp_id: req.query['preference_id']
			}
		})
		switch (order.state) {
			case 'completed': {
				return res.redirect(`http://localhost:3000/order/detail?status=${order.state}&order=${order.id}`)
			}
			case 'processing': {
				return res.redirect(`http://localhost:3000`)
			}
			case 'canceled': {
				return res.redirect(`http://localhost:3000`)
			}
			default:
				return res.redirect('http://localhost:3000/')
		}
	} catch (err) {
		console.log(err)
	}
});

server.post('/mercadoPagoNotifications', async (req, res) => {
	res.sendStatus(200);
	console.log(req.query)
	console.log(req.body)
	try {
		if (req.query.type === 'payment') {
			const payment = await mercadopago.payment.get(req.query['data.id']);
			switch (payment.body.status) {
				case 'approved': {
					const merchant = await mercadopago.merchant_orders.get(payment.body.order.id);
					const order = await Order.findOne({
						where: { mp_id: merchant.body["preference_id"] },
						include: [Product]
					})
					const updatedOrder = await order.update({ state: 'completed', payment_link: null })
					let serialsArray = [];
					for (let prod of order.products) {
						prod = prod.get();
						serialsArray.push(await Serial.findAll({
							where: { productId: prod.id },
							limit: prod.orders_products.quantity,
							raw: true
						}))
					}
					let serialsToInactive = serialsArray.reduce((acc, ser) => {
						ser.map(s => acc.push(s.serial))
						return acc;
					}, []);

					await Serial.update({ is_active: false }, {
						where: { serial: serialsToInactive },
						individualHooks: true
					});

					const productSerial = serialsArray.reduce((acc, ser) => {
						ser.map(s => acc.push({ serial: s.serial, productId: s.productId }))
						return acc;
					}, [])

					mailOrderCompleted(updatedOrder, productSerial);
				}
			}
		}
	} catch (err) {
		console.log('error ', err)
	}
});

server.get('/', isAuthenticated, (req, res) => {
	const { name, order, all } = req.query;

	Order.findAll({
		where: !(req.user.is_admin && all) && { userId: req.user.id }, //when admin and all is true theres no 'where'
		include: [
			{
				model: Product,
				through: {
					attributes: [
						'unit_price', 'quantity'
					]
				}
			}
		],
		order: [
			(name && [name, order || 'ASC']) || ['id', 'ASC']
		]
	})
		.then((orders) => {
			res.status(200).send(orders);
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
});

server.get('/:orderId', isAuthenticated, (req, res) => {
	const { orderId } = req.params

	Order.findOne({
		where: {
			id: orderId,
			userId: req.user.id
		},
		include: [
			{
				model: Product,
				through: {
					attributes: [
						'unit_price', 'quantity'
					]
				},
				include: [
					{
						model: Review,
						required: false,
						where: { userId: req.user.id }
					}
				]
			}
		]
	})
		.then((orders) => {
			if (orders) {
				return res.status(200).send(orders);
			} else {
				return res.status(404).send({ message: "Not Found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
})

server.put('/:id', isAuthenticated, (req, res) => {
	const { id } = req.params;
	const orderToUpdate = req.body;
	if (!+id) return res.status(400).json({ message: "Bad Request" });

	Order.findByPk(id)
		.then(order => {
			if (!order) {
				return res.status(404).json({ message: "Not Found" })
			}
			return order.update(orderToUpdate);
		})
		.then(updatedOrder => {
			return res.json(updatedOrder)
		})
		.catch(() => {
			res.status(500).json({ message: "Internal server error" })
		})
});

module.exports = server;