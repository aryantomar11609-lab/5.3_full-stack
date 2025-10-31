const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes
router.get('/', productController.getAllProducts);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/by-color/:color', productController.getProductsByColor);
router.post('/', productController.addProduct);

module.exports = router;
