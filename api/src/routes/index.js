const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const orderRouter = require('./order.js');
const userRouter = require('./user.js')
const categoryRouter = require('./category.js')
const categoriesRouter = require('./categories.js')
const serialsRouter = require('./serials.js')
const authRouter = require('./auth.js')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/users', userRouter);
router.use('/category', categoryRouter);
router.use('/categories', categoriesRouter);
router.use('/serials', serialsRouter);
router.use('/auth', authRouter);

module.exports = router;
