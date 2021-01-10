const server = require('express').Router();
const { Review, User } = require('../db.js');
//----------"/reviews"--------------

server.get('/:prodId', (req, res) => {
	const { prodId } = req.params;
	const { order, name } = req.query;
	if (!+prodId) {
		return res.status(400).json({
			message: 'Bad Request'
		});
	};

	Review.findAll({
		where: { productId: prodId },
		order: [[name || 'updatedAt', order || 'DESC']],
		include: [{
			model: User,
			attributes: ['first_name', 'last_name']
		}]
	})
		.then(reviews => {
			return res.json(reviews);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Internal server error',
			});
		});
});

module.exports = server;