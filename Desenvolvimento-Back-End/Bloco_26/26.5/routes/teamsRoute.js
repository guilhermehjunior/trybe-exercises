const express = require('express');
const middlewares = require('../middlewares');
const teamsGet = require('../controllers/teamsGet');
const teamsPost = require ('../controllers/teamsPost');
const router = express.Router();

router.post('/', [
  middlewares.countryValidation,
  middlewares.initialsValidation,
  middlewares.nameValidation,
  teamsPost,
]);
router.get('/', teamsGet);

module.exports = router;