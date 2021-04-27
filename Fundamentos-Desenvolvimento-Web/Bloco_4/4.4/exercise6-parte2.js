//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorioN(N){
    let soma = 0;
    for (let index = 1; index<=N;index+=1){
        soma += index;
    };
    return soma;
};

console.log(somatorioN(5));