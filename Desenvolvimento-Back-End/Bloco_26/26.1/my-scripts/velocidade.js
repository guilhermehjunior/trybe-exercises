const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia em metros? ');
const tempo = readline.questionInt('Quanto tempo levou para percorrer essa distancia em segundos? ');


const velocidade = distancia / tempo;

console.log(`Velocidade media de: ${velocidade}`);