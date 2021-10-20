const readline = require('readline-sync');

function verificaResultado(numAleatorio, numAdivinhado){ 
  if (numAleatorio === numAdivinhado) return console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${numAleatorio}`);
}

function fazendoSorteio(){
  const numeroAleatorio = Math.round(Math.random() * 10);
  const numeroAdivinhado = readline.questionInt('Adivinhe um numero entre 0 e 10. ');
  verificaResultado(numeroAleatorio, numeroAdivinhado);
  if (readline.keyInYN('Voce quer jogar de novo? ')) {
    fazendoSorteio();
  } else console.log('Obrigado por participar');
}

fazendoSorteio();

module.exports = fazendoSorteio;

