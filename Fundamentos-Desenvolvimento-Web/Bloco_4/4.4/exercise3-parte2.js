//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValor(array){
    let indiceMenor = 0
    for(let index = 0; index < array.length; index+=1){
        if (array[index]<array[indiceMenor]){
            indiceMenor= index;
        };
    }
    return indiceMenor;
}
let teste = [2, 3, 6, 7, 10, 1];
console.log(menorValor(teste));