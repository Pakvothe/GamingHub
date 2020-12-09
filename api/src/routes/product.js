const server = require('express').Router();
const { Op } = require('sequelize');
const { Product, Category } = require('../db.js');

server.get('/', (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.send(products);
        })
        .catch(next);
});

server.post('/category', (req, res) => {
    const { name_es, name_en } = req.body
    Category.create({ name_en, name_es })
        .then((data) => {
            res.status(201).json({
                message: 'OK',
                data
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: 'Bad Request',
                message: err
            })
        })
})

server.get('/category/:catName', (req, res) => {
    let { catName } = req.params
    Product.findAll({
        include: [{
            model: Category,
            where: {
                [Op.or]: [
                    { name_en: catName },
                    { name_es: catName }
                ]
            }
        }]
    })
    .then(data => res.json(data))
})

server.delete('/category/:catId', (req, res) => {
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
