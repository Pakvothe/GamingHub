const server = require('express').Router();
const { Op } = require('sequelize');
const { User, Order, Product } = require('../db.js');
//----------"/users"--------------

server.get('/', (req, res) => {
	User.findAll()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
});

server.get('/:id', (req, res) => {
	const { id } = req.params
	User.findByPk(id)
		.then(foundUser => {
			if (!foundUser) {
				return res.status(404).json({ message: "User not found" });
			}
			return res.status(200).json(foundUser)
		})
		.catch(err => {
			return res.status(500).json({ message: "Internal server error" });
		})
})

server.post('/', (req, res) => {
	const newUser = req.body;
	User.create(newUser)
		.then(user => {
			return res.status(200).json(user)
		})
		.catch(err => {
			return res.status(500).json({ message: "Internal server error" });
		})
})

server.put('/:id', (req, res) => {
	const { id } = req.params;
	const toUpdate = req.body;
	if (!toUpdate.password) {
		delete toUpdate.password
	}
	// Hashear el password porque no funciona

	User.findByPk(id)
		.then((foundUser) => {
			if (!foundUser) {
				return res.status(404).json({ message: "User not found" });
			}
			return foundUser.update(toUpdate, { hooks: true });
		})
		.then(updatedUser => {
			return res.json(updatedUser)
		})
		.catch((err) => {
			if (err.errors[0].message) {
				return res.status(409).json({ message: err.errors[0].message });
			}
			return res.status(500).json({ message: "Internal server error" });
		})
});

server.delete('/:userId', (req, res) => {
	const { userId } = req.params;
	var user = {};

	User.findOne({
		where: {
			id: userId
		}
	})
		.then(data => {
			user = data;
			return User.destroy({
				where: {
					id: userId
				}
			})
		})
		.then((data) => {
			if (data === 0) {
				res.status(404).json({ message: "Bad request" })
			}
			res.json(user)
		})
		.catch((err) => {
			res.status(500).json({ message: "Internal server error" });
		})
})


server.get('/:id/orders', (req, res) => {
	const { id } = req.params;
	if (!+id) res.status(400).json({ message: "Bad Request" });

	Order.findAll({
		where: {
			userId: id
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
		.then(orders => {
			return res.json(orders);
		})
		.catch(() => {
			res.status(500).json({ message: "Internal server error" })
		});
});

module.exports = server; 