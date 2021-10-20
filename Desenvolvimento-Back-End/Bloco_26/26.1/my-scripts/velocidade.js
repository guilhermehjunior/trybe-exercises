const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia em metros? ');
const tempo = readline.questionInt('Quanto tempo levou para percorrer essa distancia em segundos? ');

function velocidadeMedia(distancia, tempo){
  const velocidade = distancia / tempo;
  return velocidade;
}


console.log(`Velocidade media de: ${velocidadeMedia(distancia, tempo)} m/s`);