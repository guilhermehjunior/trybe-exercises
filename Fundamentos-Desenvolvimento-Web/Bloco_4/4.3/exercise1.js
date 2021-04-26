//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
n = 4;
let asteriscos = "";

for (let collum =1; collum<=n; collum +=1){
    asteriscos += "*";
};

for(let row = 1;row <=n;row +=1){
    console.log(asteriscos);
};