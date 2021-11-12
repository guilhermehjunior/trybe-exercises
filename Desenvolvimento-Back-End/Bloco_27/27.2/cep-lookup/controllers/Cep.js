const Cep = require('../services/Cep');

const getCepByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const cepEncontrado = await Cep.getCepByCep(cep);
    if(cepEncontrado.error) return res.status(cepEncontrado.code).json({ error: cepEncontrado.error });
    res.status(cepEncontrado.code).json(cepEncontrado.cep);
  } catch(err) {
    next(err);
  }
};

module.exports = {
  getCepByCep,
}
