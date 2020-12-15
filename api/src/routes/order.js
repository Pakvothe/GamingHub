const server = require('express').Router();
const { Op } = require('sequelize');
const { Order } = require('../db.js');
//----------"/orders"--------------

server.get('/', (req, res) => {
	Order.findAll({
		order: [
			['id', 'ASC']
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
		}
	})
		.then((orders) => {
			if (orders) {
				res.status(200).send(orders);
			}
			res.status(404).send({ message: "Not Found" });
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
})
module.exports = server;