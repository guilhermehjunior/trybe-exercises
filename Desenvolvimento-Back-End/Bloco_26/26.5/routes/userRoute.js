const express = require('express');
const userLogin = require('../controllers/userLogin');
const userRegister = require('../controllers/userRegister');
const middlewares = require('../middlewares');
const router = express.Router();

router.post('/register', [
  middlewares.emailValidation,
  middlewares.passwordValidation,
  middlewares.usernameValidation,
  userRegister,
]);

router.post('/login', [
  middlewares.emailValidation,
  middlewares.passwordValidation,
  userLogin,
]);
module.exports = router;