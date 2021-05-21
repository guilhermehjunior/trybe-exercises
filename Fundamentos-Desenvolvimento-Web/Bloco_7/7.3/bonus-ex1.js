function quantidadeMoedas(arrayMoedas, troco) {
  const nwArray = [];
  for (let moeda = 0; moeda < arrayMoedas.length;) {
    let divisao = troco / arrayMoedas[moeda];
    if (divisao > 2){
      nwArray.push(arrayMoedas[moeda]);
      troco = troco % arrayMoedas[moeda]; 
    } else if (divisao === 2){
      nwArray.push(arrayMoedas[moeda]);
      troco = arrayMoedas[moeda];
    } else if (divisao >= 1) {
      nwArray.push(arrayMoedas[moeda]);
      troco = troco % arrayMoedas[moeda];
      moeda += 1;
    } else moeda +=1;
  }
  return nwArray;
}


function getChange(payable, paid) {
  if(paid < payable) throw new Error('paid value is not enough');
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  if(paid === payable) return [];
  let troco = paid - payable;
  return quantidadeMoedas(coins, troco);
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);