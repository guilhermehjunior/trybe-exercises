let income = 6000;
let INSS;
let IR;

//deduzindo INSS
if (income <= 1556.94){
    INSS = 0.08*income;
}else if (income <= 2594.92){
    INSS = 0.09*income;
}else if (income <= 5189.82){
    INSS = 0.11*income;
}else {
    INSS = 570.88;
}

let incomeINSS = income - INSS;

//deduzindo IR

if (incomeINSS <= 1903.98){
    IR = 0;
}else if (incomeINSS <= 2826.65){
    IR = 0.075*incomeINSS - 142.8;
}else if(incomeINSS <=3751.05){
    IR = 0.15*incomeINSS- 354.8;
}else if (incomeINSS <=4664.68){
    IR = 0.225*incomeINSS - 636.13;
}else {
    IR = 0.275*incomeINSS - 869.36;
}

let liquidIncome = income - INSS - IR;

console.log(liquidIncome);