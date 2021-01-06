const server = require('express').Router();
const { Op } = require('sequelize');
const { Product, Category, Image, Review } = require('../db.js');

//----------"/products"--------------

server.get('/', (req, res, next) => {
	const { query, order, limit, offset, isActive } = req.query;

	let count = 0;
	Product.count()
		.then(data => {
			count = data;
			return Product.findAll({
				where: !isActive && { is_active: true },
				include: [
					{
						model: Image,
					}
				],
				order: [
					(query && [query, order || 'ASC']) || ['id', 'ASC'],
					[Image, 'id', 'ASC']
				],
				limit: limit ? limit : null,
				offset: offset ? offset : null
			})
		})
		.then((products) => {
			res.send({ count, results: products });
		})
		.catch(() => {
			res.status(500).json({ message: "Internal server error" })
		});
});

server.post('/cart', (req, res) => {
	const { arrayProducts } = req.body;
	Product.findAll({
		where: { id: arrayProducts },
		include: [{
			model: Image,
		}]
	})
		.then(products => {
			if (products.length) {
				res.json(products);
			} else {
				res.status(404).json({ message: "Not Found" })
			}
		})
		.catch(err => {
			res.status(500).json({
				message: 'Internal server error',
			});
		})
});

server.post('/', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	const {
		name,
		description_es,
		description_en,
		price,
		img,
		categories,
		is_active
	} = req.body
	if (name && description_en && description_es && price && is_active) {

		//Filtro las categorias que vienen en true y las coloco en un array
		let newCategories = [];
		if (!!Object.keys(categories).length) {
			for (cat in categories) {
				if (categories[cat] === true) {
					newCategories.push(cat)
				}
			}
		}

		let product;
		Product.create({
			name,
			description_es,
			description_en,
			price,
			is_active,
			stock: 0, //may be subject to change
			sales: 0,  //may be subject to change
			score: 0
		})
			.then((data) => {
				product = data;
				return Category.findAll({
					where: {
						id: newCategories
					}
				})
			})
			.then((categories) => {
				categories.forEach(category => {
					product.addCategories(category); //Creo la relacion de la categoria con el producto recien creado
				})
				let images = img.map(url => ({ url, productId: product.id }))
				return Image.bulkCreate(images)
			})
			.then(() => {
				return Product.findOne({
					where: { id: product.id },
					include: { model: Image }
				})
			})
			.then((data) => {
				res.status(201).json(data);
			})
			.catch((err) => {
				res.status(500).json({ message: "Internal server error" })
			})
	} else {
		res.status(400).json({ message: "Bad Request" })
	}
})

server.get('/search', (req, res) => {
	const { query, limit, offset } = req.query;
	if (query) {

		let count = 0;
		Product.count({
			where: {
				[Op.or]: [
					{ name: { [Op.iLike]: `%${query}%` } },
					{ description_es: { [Op.iLike]: `%${query}%` } },
					{ description_en: { [Op.iLike]: `%${query}%` } }
				]
			}
		})
			.then(data => {
				count = data;
			})


		Product.findAll({
			where: {
				[Op.or]: [
					{ name: { [Op.iLike]: `%${query}%` } },
					{ description_es: { [Op.iLike]: `%${query}%` } },
					{ description_en: { [Op.iLike]: `%${query}%` } }
				]
			},
			include: [{
				model: Image,
			}],
			limit: limit ? limit : null,
			offset: offset ? offset : null
		})
			.then((products) => {
				res.status(200).json({ count, results: products });
			})
			.catch(err => {
				res.status(500).json({ message: 'Internal server error', })
			})

	} else {
		res.status(400).json({ message: "Query is empty" });
	}
})

server.put('/:id/active', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	const { id } = req.params;
	Product.findOne({
		where: { id }
	})
		.then(product => {
			return Product.update({
				is_active: !product.is_active
			}, {
				where: { id },
				returning: true
			})
		})
		.then(data => {
			if (!data[0]) {
				throw new Error('error 400')
			} else {
				product = data[1][0];
				return Product.findOne({
					where: {
						id: product.id
					},
					include: [
						{
							model: Category
						},
						{
							model: Image
						}
					]
				})
			}
		})
		.then(product => res.status(200).json(product))
		.catch(err => {
			res.status(500).json({ message: 'Internal server error' })
		})
})

server.put('/:id', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	const { id } = req.params;
	const {
		name,
		description_es,
		description_en,
		price,
		img,
		categories,
		is_active
	} = req.body;

	let newCategories = [];

	if (!!Object.keys(categories).length) {
		for (cat in categories) {
			if (categories[cat] === true) {
				newCategories.push(cat);
			}
		}
	}

	let product;
	Product.update({
		name,
		description_es,
		description_en,
		price,
		is_active
	}, {
		where: { id },
		returning: true
	})
		.then(data => {
			if (!data[0]) {
				throw new Error('error 400')
			} else {
				product = data[1][0];
				return Product.findOne({
					where: {
						id: product.id
					},
					include: [
						{
							model: Category
						},
						{
							model: Image
						}
					]
				})
			}
		})
		.then(data => {
			product = data;
			return Category.findAll({
				where: {
					id: newCategories
				}
			})
		})
		.then((catToAdd) => {
			product.categories.forEach(category => {
				product.removeCategories(category)
			})
			catToAdd.forEach((category) => {
				product.addCategories(category);
			})
		})
		.then(() => {
			let images = img.map(url => ({ url, productId: product.id }))
			return Image.bulkCreate(images)
		})
		.then(() => {
			return Product.findOne({
				where: {
					id: product.id
				},
				include: [
					{
						model: Image
					}
				]
			}
			)
		})
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			if (err.message.includes('error 400')) {
				return res.status(400).json({ message: 'Bad request' })
			}
			return res.status(500).json({ message: 'Internal server error' })
		})
})


server.post('/:prodId/category/:catId', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	let { prodId, catId } = req.params;
	let prod = Product.findOne({
		where: { id: prodId }
	})
	let cat = Category.findOne({
		where: { id: catId }
	})
	Promise.all([prod, cat])
		.then(([prod, cat]) => {
			prod.addCategories(cat)
			res.status(201).json({ message: "Product associated with category successfully." })
		})
})

server.delete('/:prodId/category/:catId', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	let { prodId, catId } = req.params;
	let prod = Product.findOne({
		where: { id: prodId }
	})
	let cat = Category.findOne({
		where: { id: catId }
	})
	Promise.all([prod, cat])
		.then(([prod, cat]) => {
			prod.removeCategories(cat)
			res.status(200).json({ message: "Category deleted." })
		})
})

server.delete('/:id', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	const prodId = req.params.id;
	Product.destroy({
		where: {
			id: prodId
		}
	}).then(data => {
		if (!data) {
			res.status(404).json({ message: 'Product not found.' })
		} else {
			res.status(200).json({ message: 'Product deleted.' })
		}
	}).catch(() => {
		res.status(500).json({
			message: 'Internal server error',
		})
	});
});

server.get('/:id', (req, res) => {
	const prodId = req.params.id;
	if (!+prodId) {
		return res.status(400).json({
			message: 'Bad Request'
		});
	};

	Product.findOne({
		where: { id: prodId },
		include: [
			{
				model: Category,
				through: { attributes: [] }
			}, {
				model: Image
			}, {
				model: Review
			}
		]
	})
		.then(prod => {
			if (!prod) {
				return res.status(404).json({ message: 'Product not found.' });
			} else {
				return res.json(prod);
			}
		})
		.catch(() => {
			res.status(500).json({
				message: 'Internal server error',
			});
		});
});

server.delete('/image/:id', (req, res) => {
	if (!req.user?.is_admin) return res.sendStatus(401);

	const imgId = req.params.id;
	Image.destroy({
		where: { id: imgId },
	}).then(data => {
		if (!data) {
			res.status(404).json({ message: 'Image not found.' })
		} else {
			res.status(200).json({ message: 'Image deleted.' })
		}
	}).catch(() => {
		res.status(500).json({
			message: 'Internal server error',
		})
	});
});

server.post('/:id/review', (req, res) => {
	if (!req.user) return res.sendStatus(401);
	const { id: productId } = req.params;
	const { id: userId } = req.user;
	const { score, description } = req.body;

	if (!+productId) {
		return res.status(400).json({
			message: 'Bad Request'
		});
	};

	Product.findByPk(productId)
		.then((prod) => {
			if (!prod) return res.status(404).json({ message: 'Product not found.' });

			return Review.create({ score, description, productId, userId })
		})
		.then(() => {
			return res.status(201).json({ message: 'Review created' });
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({
				message: 'Internal server error',
			})
		})

});

server.put('/reviews/:id', (req, res) => {
	if (!req.user) return res.sendStatus(401);
	const { id } = req.params;


	Review.update(req.body, {
		where: {
			id, userId: req.user.id
		},
		individualHooks: true
	})
		.then(resp => {
			if (!resp[0]) return res.status(404).json({ message: 'Review not found.' });

			return res.status(200).json({ message: 'Review Updated.' })
		})
		.catch(() => {
			res.status(500).json({
				message: 'Internal server error',
			})
		})

});

server.delete('/reviews/:id', (req, res) => {
	if (!req.user) return res.sendStatus(401);
	const { id } = req.params;

	Review.destroy({
		where: req.user.is_admin ? { id } : { id, userId: req.user.id },
		individualHooks: true
	})
		.then(resp => {
			if (!resp) return res.status(404).json({ message: 'Review not found.' });

			return res.status(200).json({ message: 'Review Deleted.' })
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({
				message: 'Internal server error',
			})
		})
})



module.exports = server;