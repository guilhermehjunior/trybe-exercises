const emailValidation = require('./emailValidation');
const passwordValidation = require('./passwordValidation');
const usernameValidation = require('./usernameValidation');
const tokenValidation = require('./tokenValidation');
const errorMiddlaware = require('./errorMiddleware');
const countryValidation = require('./countryValidation');
const nameValidation = require('./countryValidation');
const initialsValidation = require('./initialsValidation');

module.exports = {
  emailValidation,
  passwordValidation,
  usernameValidation,
  tokenValidation,
  errorMiddlaware,
  countryValidation,
  nameValidation,
  initialsValidation,
};
