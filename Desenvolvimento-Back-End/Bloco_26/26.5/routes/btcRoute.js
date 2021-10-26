const express = require('express');
const middlewares = require('../middlewares');
const bitcoinFetch = require('../controllers/bitcoinFetch');
const router = express.Router();

router.get('/price', [
  middlewares.tokenValidation,
  bitcoinFetch,
]);

module.exports = router;