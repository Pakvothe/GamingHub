const server = require('express').Router();
const { Op } = require('sequelize');
const { Order, Product, Orders_products } = require('../db.js');
//----------"/orders"--------------

server.post('/', async (req, res) => {
	const order = req.body;
	const { products } = order;
	delete order.products;
	//	trabajo para el front?
	// let total = products.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
	// order.total_amount = total;

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
			return Orders_products.bulkCreate(formattedProducts)
		})
		.then(() => Order.findOne({
			where: { id: idOrder },
			include: [
				{ model: Product }
			]
		}))
		.then(updatedOrder => res.json(updatedOrder))
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: "Internal server error" })
		})
});

server.get('/', (req, res) => {
	Order.findAll({
		include: [
			{
				model: Product,
				through: {
					attributes: [
						'unit_price', 'quantity'
					]
				}
			}
		]
	})
		.then((orders) => {
			res.status(200).send(orders);
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
});

server.get('/:orderId', (req, res) => {
	const { orderId } = req.params

	Order.findOne({
		where: {
			id: orderId
		},
		include: [
			{
				model: Product,
				through: {
					attributes: [
						'unit_price', 'quantity'
					]
				}
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

server.put('/:id', (req, res) => {
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