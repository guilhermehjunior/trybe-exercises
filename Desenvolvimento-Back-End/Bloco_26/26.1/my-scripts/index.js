const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const fatorial = require('./fatorial');
const readline = require('readline-sync');

function escolhaScript() {
  const scripts = ['imc', 'velocidade', 'sorteio', 'fatorial'];
  const funcs = [imc, velocidade, sorteio, fatorial];
  const index = readline.keyInSelect(scripts, 'Escolha o script para rodar. ');
 funcs[index]();
}

escolhaScript();