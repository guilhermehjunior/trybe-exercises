// Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenandoArray = (array) => {
  let newArray = array;
  let menorValor = 0;
  for (let index1 = 0; index1 < newArray.length; index1 += 1) {
    for (let index = 0; index < newArray.length; index += 1) {
      if (newArray[index1] < newArray[index]) {
        menorValor = newArray[index];
        newArray[index] = newArray[index1];
        newArray[index1] = menorValor;
      }
    }
  }
  return newArray;
}

console.log(`Os numeros ${ordenandoArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);
console.log(`Os numeros ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`);