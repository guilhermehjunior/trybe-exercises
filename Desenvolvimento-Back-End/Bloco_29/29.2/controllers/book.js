const express = require('express');
const { Book } = require('../models');
const bookRouter = express.Router();

bookRouter.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
});

module.exports = bookRouter;