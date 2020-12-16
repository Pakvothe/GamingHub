const server = require('express').Router();
const { Op } = require('sequelize');
const { Order, Product, User } = require('../db.js');
//----------"/orders"--------------

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