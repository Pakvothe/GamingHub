const server = require('express').Router();
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const { Product, Category, Image, Order } = require('../db.js');
const { isAdmin } = require('../../utils/customMiddlewares');
const { previousDays } = require('../../utils/functions');

server.get('/sales', isAdmin, (req, res) => {
	const today = new Date();
	const lastWeek = previousDays(today, 7);

	Order.findAll({
		where: {
			updatedAt: {
				[Op.between]: [lastWeek, today]
			},
			state: 'completed'
		},
		attributes: [
			[Sequelize.fn('date_trunc', 'day', Sequelize.col('updatedAt')), 'date'],
			[Sequelize.fn('count', '*'), 'count']],
		group: 'date',
	})
		.then(data => res.status(200).json(data))
		.catch(err => res.status(500).json({ message: 'Internal Server Error' }))
});

server.get('/user', isAdmin, async (req, res) => {
	try {
		const guestSales = await Order.count({
			where: {
				userId: 1
			}
		});

		const userSales = await Order.count({
			where: {
				userId: {
					[Op.ne]: 1
				}
			}
		})
		res.json({
			guestSales,
			userSales
		})
	}
	catch (err) {
		return res.status(500).json({ message: 'Internal Server Error' })
	}
})

server.get('/earnings', isAdmin, (req, res) => {
	const today = new Date().toISOString();
	let arrayFecha = today.split("T");
	const startDate = arrayFecha[0].slice(0, -2) + "01T"
	arrayFecha[0] = startDate;
	arrayFecha = arrayFecha.join("")

	Order.findAll({
		where: {
			updatedAt: {
				[Op.between]: [arrayFecha, today]
			},
			state: 'completed'
		}
	})
		.then(data => {
			const monthlyEarning = data.reduce((acc, cur) => {
				acc += cur.total_amount * (1 - (cur.discount / 100))
				return acc;
			}, 0)
			res.json(monthlyEarning)
		})
		.catch(err => console.log("ERRORRRRR", err))
})

module.exports = server;