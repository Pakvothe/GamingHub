const server = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../db.js');
//----------"/user"--------------

server.get('/', (req, res) => {
	User.findAll({
		order: [
			['id', 'ASC']
		]
	})
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((err) => {
			res.status(500).json({
				message: "Internal server error"
			});
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
module.exports = server; 