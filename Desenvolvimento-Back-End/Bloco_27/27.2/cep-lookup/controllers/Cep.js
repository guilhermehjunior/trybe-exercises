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

const postCep = async (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const cepPostado = await Cep.postCep({ cep, logradouro, bairro, localidade, uf });
    if (cepPostado.error) return res.status(cepPostado.code).json({ error: cepPostado.error });
    res.status(cepPostado.code).json(cepPostado.postedCep);
  } catch (err) {
    next(err.message);
  }
}

module.exports = {
  getCepByCep,
  postCep,
}
