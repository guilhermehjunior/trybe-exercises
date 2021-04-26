//exercise7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor =numbers[0];

for(index =1;index<numbers.length -1; index+=1){
    if (numbers[index]<menor){
        menor = numbers[index];
    }
}

console.log(menor);