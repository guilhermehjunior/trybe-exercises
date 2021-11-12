const connection = require('./connection');

const getCepByCep = async (cep) => {
  const [cepEncontrado] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return cepEncontrado;
};

const postCep = async (objeto) => {
  const { cep, logradouro, bairro, localidade, uf } = objeto;
  const result = await connection().execute('INSERT INTO ceps VALUES(?, ?, ?, ?, ?)', [cep],[logradouro],[bairro],[localidade], [uf]);
  console.log(result);
  return objeto;
};

module.exports = {
  getCepByCep,
  postCep,
};
