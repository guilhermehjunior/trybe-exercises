const { getCepByCep } = require('../services/Cep');

const getCepByCep = (req, res, next) => {
  try {
    const cep = await getCepByCep()
  } catch(err) {
    next(err);
  }
};

module.exports = {
  getCepByCep,
}
