const express = require('express');
const categoryCtrl = require('../apps/controllers/apis/category');
const productCtrl = require('../apps/controllers/apis/product');
const orderCtrl = require('../apps/controllers/apis/order');
const userCtrl = require('../apps/controllers/apis/user');
const router = express.Router();

router.get('/category', categoryCtrl.index);
router.get('/products', productCtrl.getProducts);
router.get('/order', orderCtrl.order);
router.get('/products/:id', productCtrl.getProductById);

router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUserData);

module.exports = router; 