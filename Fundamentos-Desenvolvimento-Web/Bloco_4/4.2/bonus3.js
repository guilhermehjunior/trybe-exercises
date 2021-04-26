//exercise bonus3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers =[];

for (let index = 0;index<numbers.length;index+=1){
    if (index === numbers.length-1){
        multipliedNumbers.push(numbers[index]*2);
    }else{
        multipliedNumbers.push(numbers[index]*numbers[index+1]);
    };
};

console.log(multipliedNumbers);
