const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {

  try {
    const product = await ProductModel.getById(req.params.id);
  
    if(!product) return res.status(404).json({ message: 'Nenhum produto encontrado.'})
  
    res.status(200).json(product);

  } catch(error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const newProduct = await ProductModel.add(name, brand);
  
    res.status(201).json(newProduct);

  } catch(error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await ProductModel.exclude(req.params.id);
  
    if(!product) return res.status(404).json({ message: 'Nenhum produto encontrado.'})
  
    res.status(200).json(product);
    
  } catch(error) {
    next(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const product = await ProductModel.update(req.params.id, name, brand);
  
    res.status(200).json(product);
    
  } catch(error) {
    next(error);
  }
});

module.exports = router;