//exercise6

let numbers = [3, 10, 4, 20, 70, 8, 100, 2, 36, 28];

let oddQuantity =0;

for (let index=0;index<numbers.length;index+=1){
    if(numbers[index]%2!==0){
        oddQuantity+=1
    }
}

if (oddQuantity===0){
    console.log("Nenhum valor impar encontrado");
}else{
    console.log(oddQuantity);
}