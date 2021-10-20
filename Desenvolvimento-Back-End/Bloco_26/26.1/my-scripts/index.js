const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const readline = require('readline-sync');

function escolhaScript() {
  const scripts = ['imc', 'velocidade', 'sorteio'];
  const funcs = [imc, velocidade, sorteio];
  const index = readline.keyInSelect(scripts, 'Escolha o script para rodar. ');
 funcs[index]();
}

escolhaScript();