const server = require('express').Router();
const { Category } = require('../db.js');
//----------"/categories"--------------

server.get('/', (req, res) => {
	Category.findAll({
		order: [
			['name_es', 'ASC']
		],
	})
		.then((categories) => {
			res.json(categories);
		})
		.catch(err => {
			res.status(500).json({ message: 'Internal server error' })
		});
});

server.get('/:id', (req, res) => {
	const { id } = req.params;
	Category.findByPk(id)
		.then((category) => {
			if (!category) return res.sendStatus(404)
			res.json(category);
		})
		.catch(err => {
			res.status(500).json({ message: 'Internal server error' })
		});
});

module.exports = server;