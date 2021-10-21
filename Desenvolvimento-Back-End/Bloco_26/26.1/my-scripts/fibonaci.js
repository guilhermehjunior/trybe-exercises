const readline = require('readline-sync');

function fibonaciNumeroFornecido() {
  const numero = readline.questionInt('Deseja saber quantos numeros da sequencia fibonaci? ');
  if (numero < 0) {
    console.log('Favor fornecer um numero maior que 0');
    fibonaciNumeroFornecido();
  } else console.log(`A sequencia de fibonaci ate o elemtno ${numero} e ${fibonaci(numero)}`);
}

function fibonaci(num) {
  const fibArray = [1];
  for (let index = 1; index < num; index += 1){
    if (index === 1) {
      fibArray.push(index);
    } else {
      let proxNumero = fibArray[index - 2] + fibArray[index - 1];
      fibArray.push(proxNumero);
    }
  }
  return fibArray;
}

fibonaciNumeroFornecido();

module.exports = fibonaciNumeroFornecido;