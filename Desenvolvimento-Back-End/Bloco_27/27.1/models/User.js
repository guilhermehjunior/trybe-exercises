const connection = require('./connection');

const isValid = ({ firstNAme, lastName, email, password }) => {
  if (!firstNAme) return false;
  if (!lastName) return false;
  if (!email) return false;
  if (!password && password.length < 6 && typeof password !== 'string') return false;
  return true;
};

module.exports = {
  isValid,
};
