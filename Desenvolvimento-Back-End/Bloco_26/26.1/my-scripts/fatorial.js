const readline = require('readline-sync');

function fatorialNumeroFornecido() {
  const numero = readline.questionInt('Deseja saber o fatorial de qual numero? ');
  if (numero < 0) {
    console.log('Favor fornecer um numero maior que 0');
    fatorialNumeroFornecido();
  } else console.log(`O fatorial de ${numero} e ${fatorial(numero)}`);
}

function fatorial(num) {
  let fatorial = 1;
  for (let index = 1; index <= num; index += 1) {
    fatorial *= index;
  }
  return fatorial;
}

// fatorialNumeroFornecido();

module.exports = fatorialNumeroFornecido;