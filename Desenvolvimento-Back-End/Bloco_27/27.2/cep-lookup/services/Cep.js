const Cep = require('../models/Cep');

const errors = {
  cep_format: "CEP inválido",
  no_cep: "CEP não encontrado",
}
const cepValidation = (cep) => {
  const regex = /^[0-9]{5}-?\d{3}$/;
  return !regex.test(cep);;
};

const getCepByCep = async (cep) => {
  if(cepValidation(cep)) return { code: 400, error: { code: 'invalidData', message: errors.cep_format } };
  const cepEncontrado = await Cep.getCepByCep(cep);
  if (cepEncontrado.length === 0) return { code: 404, error: { code: 'notFound', message: errors.no_cep } };
  return { code: 200, cep: cepEncontrado[0] };
};

module.exports = {
  getCepByCep,
}