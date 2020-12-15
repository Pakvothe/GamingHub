const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const orderRouter = require('./order.js');
const userRouter = require('./user')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/users', userRouter);

module.exports = router;
