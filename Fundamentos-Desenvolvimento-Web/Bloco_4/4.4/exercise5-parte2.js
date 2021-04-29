//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maiorValor(array){
    let indiceMaior = 0
    for(let index = 0; index < array.length; index+=1){
        if (array[index]>array[indiceMaior]){
            indiceMaior= index;
        };
    }
    return indiceMaior;
}

function repeteMais(array){
    let contador = [];
    for (let index in array){
        contador[index]=0;
        for(let index2 in array){
            if (array[index]===array[index2]){
                contador[index]+=1;
            };          
        };
    };
    return array[maiorValor(contador)];
}

console.log(repeteMais([2, 1, 1, 1, 1, 1, 3]));