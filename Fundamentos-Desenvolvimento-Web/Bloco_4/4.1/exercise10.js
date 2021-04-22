let custoProduto = 15;
let vendaProduto = 30;


if(custoProduto<0 || vendaProduto<0){
    console.log("Erro.")
}else {
    let lucro = vendaProduto-custoProduto*1.2;
    console.log(lucro*1000);
}
