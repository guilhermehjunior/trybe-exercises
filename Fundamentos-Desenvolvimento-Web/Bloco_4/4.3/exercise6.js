//6- Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let primo = 17;
let numeroDivisoes = 0;

for (let divisor = 1; divisor<=primo; divisor +=1){
    if(primo%divisor===0){
        numeroDivisoes += 1;
    }
};

if(numeroDivisoes===2){
    console.log(`O numero ${primo} eh primo`);
}else{
    console.log(`O numero ${primo} nao eh primo`);
};