const Joi = require('joi');
const Cep = require('../models/Cep');

const errors = {
  cep_format: 'CEP inválido',
  no_cep: 'CEP não encontrado',
  cep_existente: 'CEP já existente'
};

const schema = Joi.object({
  cep: Joi.string().empty().required(),
  logradouro: Joi.string().empty().required(),
  bairro: Joi.string().empty().required(),
  localidade: Joi.string().empty().required(),
  uf: Joi.string().empty().required(),
});


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

const postCep = async(objeto) => {
  const cepEncontrado = await Cep.getCepByCep(objeto.cep);
  if (cepEncontrado.length !== 0) return { code: 409, error: { code: 'alreadyExists', message: errors.cep_existente} };
  const joiValidation = schema.validate(objeto);
  if (joiValidation.error) return { code: 400, error: { code: 'invalidData', message: joiValidation.error.details[0].message } };
  const postedCep = await Cep.postCep(objeto);
  return { code: 201, postedCep };;
};

module.exports = {
  getCepByCep,
  postCep,
};
