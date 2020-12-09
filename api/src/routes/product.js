const server = require('express').Router();
const { Product, Category } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then((products) => {
			res.send(products);
		})
		.catch(next);
});

server.post('/:prodId/category/:catId', (req, res) => {
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
        res.status(201).json({ message: "Producto asociado exitosamente con la categoría" })
    })
})

server.delete('/:prodId/category/:catId', (req, res) => {
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
        res.status(200).json({ message: "Categoría eliminada" })
    })
})

module.exports = server;
