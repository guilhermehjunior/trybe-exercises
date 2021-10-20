const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura?' );

const imc = altura / (peso * peso);

console.log(`IMC de ${imc}`);