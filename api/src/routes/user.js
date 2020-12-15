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
			res.status(500).json({ message: "Internal server error" });
		})
});

module.exports = server; 