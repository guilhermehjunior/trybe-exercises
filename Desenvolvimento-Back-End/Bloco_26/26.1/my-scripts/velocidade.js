const readline = require('readline-sync');


function velocidade() {
  const distancia = readline.questionInt('Qual a distancia em metros? ');
  const tempo = readline.questionInt('Quanto tempo levou para percorrer essa distancia em segundos? ');
  console.log(`Velocidade media de: ${velocidadeMedia(distancia, tempo)} m/s`);
}


function velocidadeMedia(distancia, tempo){
  const velocidade = distancia / tempo;
  return velocidade;
}

velocidade();

module.exports = velocidade;

