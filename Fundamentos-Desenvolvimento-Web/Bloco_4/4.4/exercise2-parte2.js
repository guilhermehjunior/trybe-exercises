//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(array){
    let indiceMaior = 0
    for(let index = 0; index < array.length; index+=1){
        if (array[index]>array[indiceMaior]){
            indiceMaior= index;
        };
    }
    return indiceMaior;
}
let teste = [12, 3, 6, 7, 10, 1];
console.log(maiorValor(teste));