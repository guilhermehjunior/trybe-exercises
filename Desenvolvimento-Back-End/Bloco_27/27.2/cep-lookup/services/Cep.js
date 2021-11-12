const errors = {
  cep_format: "CEP inválido",
}
const cepValidation = (cep) => {
  const regex = /\d{5}-?\d{3}/;
  return !regex.test(cep);
};

const getCepByCep = (cep) => {
  if(cepValidation(cep)) return { error: { code: 'invalidData', message: errors.cep_format } };
  return cep;
};

module.exports = {
  getCepByCep,
}