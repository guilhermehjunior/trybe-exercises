const express = require('express');
const middlewares = require('../middlewares');
const router = express.Router();

const posts = [
  {
    id: 1,
    post: 'blabla',
  },
  {
    id:2,
    post: 'hello',
  },
];

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const postFound = posts.find((post) => post.id === parseInt(id, 10));

  if(!postFound) return next({message:"Opsss, route not found!" });
  res.status(201).json(postFound);
  next();
});

router.get('/', (_req, res, next) => {
  if (posts.length === 0) return res.status(200).json({ posts: [] });
  res.status(200).json({posts});
  next();
});

module.exports = router;