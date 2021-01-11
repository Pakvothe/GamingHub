const server = require('express').Router();
const { Op } = require('sequelize');
const { Order, Product, Orders_products, Review } = require('../db.js');
const { isAuthenticated, isAdmin } = require('../../utils/customMiddlewares');
const mercadopago = require('mercadopago');
//----------"/orders"--------------

server.post('/', async (req, res) => {
	// const { id, topic } = req.query;
	// console.log('id', id, 'topic', topic)
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
				{ model: Product }
			]
		}))
		.then(async updatedOrder => {
			mercadopago.configure({
				access_token: 'TEST-5400134544155678-010923-025e4b3ff8e012c1d3c3224e777cffe2-131738657'
			});

			let preference = {
				items: updatedOrder.products.map(product => ({
					title: product.name,
					unit_price: product.orders_products.unit_price,
					quantity: product.orders_products.quantity
				})),
				back_urls: {
					success: "http://localhost:3000/",
					failure: "http://localhost:3000/",
					pending: "http://localhost:3000/"
				},
				auto_return: "approved",
				notification_url: "http://26a713f06519.ngrok.io/orders"
			};

			const resp = await mercadopago.preferences.create(preference)
			const upOrder = await updatedOrder.update({ mp_id: resp.response.id })
			console.log(resp)
			// .then(function (response) {
			// 	// Este valor reemplazará el string "<%= global.id %>" en tu HTML
			// 	console.log(response)
			// 	// global.id = response.body.id;
			// }).catch(function (error) {
			// 	console.log(error);
			// });
			res.json(resp.body.init_point)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({ message: "Internal server error" })
		})
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
			console.log(err);
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