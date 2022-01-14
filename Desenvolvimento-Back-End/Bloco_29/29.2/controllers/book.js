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
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

bookRouter.get('/', async (_req,res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
});

bookRouter.get('/:id', async (req,res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
});

bookRouter.delete('/:id', async (req,res) => {
  const { id } = req.params;
  try {
    await Book.destroy({ where: { id } });
    return res.status(200).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
});

bookRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  try {
    const newBook = await Book.update({ title, author, pageQuantity }, { where: { id } });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = bookRouter;