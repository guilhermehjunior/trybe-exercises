const readline = require('readline-sync');

function calculaIMC(peso, altura){
  return peso / (altura * altura);
}

function tabelaIMC(imc) {
  if (imc < 18.5) console.log('Abaixo do peso');
  else if (imc < 24.9) console.log('Peso Normal');
  else if (imc < 29.9) console.log('Acima do Peso');
  else if (imc < 34.9) console.log('Obesidade grau I');
  else if (imc < 39.9) console.log('Obesidade grau II');
  else console.log('Obesidade Grau III e IV');
}

function imc() {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura?' );

  const imc = calculaIMC(peso, altura);
  console.log(`IMC de ${imc}`);
  tabelaIMC(imc);
}

// imc();

module.exports = imc;