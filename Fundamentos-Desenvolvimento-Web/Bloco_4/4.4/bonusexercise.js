let romanos = {
    I:1,
    IV:4,
    V:5,
    IX:9,
    X:10,
    XL:40,
    L:50,
    XC:90,
    C:100,
    CD:400,
    D:500,
    CM:900,
    M:100,
}

function romanoToArabic(string){
    let noUpperCaseString = string.toLowerCase();

    let sum = 0;
    for (let index = 0;index<noUpperCaseString.length; index+=1){
        if (noUpperCaseString[index]==='i'){
            if (noUpperCaseString[index+1]==='v'){
                sum +=4;
                index+=1;
            }else if (noUpperCaseString[index+1]==='x'){
                sum +=9;
                index+=1;
            }else{
                sum +=1;
            };
        }else if(noUpperCaseString[index]==='v'){
            sum +=5;
        }else if (noUpperCaseString[index]==='x'){
            if (noUpperCaseString[index+1]==='l'){
                sum +=40;
                index+=1;
            }else if (noUpperCaseString[index+1]==='c'){
                sum +=90;
                index+=1;
            }else{
                sum +=10;
            };
        }else if (noUpperCaseString[index]==='l'){
            sum+=50;
        }else if (noUpperCaseString[index]=== 'c'){
            if (noUpperCaseString[index+1]==='d'){
                sum +=400;
                index+=1;
            }else if (noUpperCaseString[index+1]==='m'){
                sum +=900;
                index+=1;
            }else{
                sum +=100;
            };
        }else if (noUpperCaseString[index]==='d'){
            sum+= 500;
        }else if (noUpperCaseString[index]=== 'm'){
            sum+=1000;
        }else{
            return "Nao e um numero romano"
        };
        
    };
    return sum;
};

console.log(romanoToArabic('MMCCCLXXVII'));