const Product = require('../models/Product');

 exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

 exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

 exports.getProductsByColor = async (req, res) => {
  try {
    const color = req.params.color;
    const products = await Product.find({ 'variants.color': color });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching by color', error: err.message });
  }
};

 exports.addProduct = async (req, res) => {
  try {
    const { name, price, category, variants } = req.body;
    const newProduct = new Product({ name, price, category, variants });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error adding product', error: err.message });
  }
};
