const server = require('express').Router();
const { Op } = require('sequelize');
const { Product, Category, Image } = require('../db.js');
const { isAdmin } = require('../../utils/customMiddlewares');
//----------"/category"--------------

server.post('/', isAdmin, (req, res) => {
	const { name_es, name_en } = req.body
	if (!name_es && !name_en) {
		return res.status(400).json({ message: 'Bad Request' })
	}
	Category.create({ name_en, name_es })
		.then((data) => {
			res.status(201).json(data)
		})
		.catch(() => {
			res.status(500).json({ message: 'Internal server error' })
		})
})

server.get('/:catName', (req, res) => {
	let { catName } = req.params
	const { limit, offset } = req.query;

	catName = catName.toLowerCase();
	let count = 0;
	Product.count({
		where: { is_active: true },
		include: [
			{
				model: Category,
				where: {
					[Op.or]: [
						{ name_en: catName },
						{ name_es: catName }
					]
				}
			}
		]
	})
		.then(data => {
			count = data;
		})
	Product.findAll({
		order: [
			[Image, 'id', 'ASC']
		],
		where: { is_active: true },
		limit: limit ? limit : null,
		offset: offset ? offset : null,
		include: [
			{
				model: Category,
				where: {
					[Op.or]: [
						{ name_en: catName },
						{ name_es: catName }
					]
				}
			}, {
				model: Image
			}
		]
	})
		.then(data => res.json({ count, results: data }))
})

server.put('/:catId', isAdmin, (req, res) => {
	let { catId } = req.params;
	let { name_es, name_en } = req.body;
	Category.update({
		name_es,
		name_en
	}, {
		where: { id: catId },
		returning: true
	})
		.then(category => {
			data = category[1][0]
			res.status(200).json(data)
		})
})

server.delete('/:catId', isAdmin, (req, res) => {
	const { catId } = req.params;
	var category = {};
	Category.findOne({
		where: { id: catId }
	})
		.then(data => {
			category = data;
			return Category.destroy({
				where: { id: catId }
			})
		})
		.then(() => {
			res.json(category)
		})
})

module.exports = server;