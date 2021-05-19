// Exercicio1

const fatorial = (number) => {
  let fatorial = 1;
  for (let numero = 2; numero <= number; numero +=1 ) {
    fatorial *= numero;
  }
  return fatorial;
}


const fatorial2 = (number) => number <= 1 ? 1 : fatorial(number);


console.log(fatorial2(0));