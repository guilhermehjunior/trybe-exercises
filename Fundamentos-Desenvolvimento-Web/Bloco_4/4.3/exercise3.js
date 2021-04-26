//3- Agora inverta o lado do triângulo. Por exemplo:
n= 6;

let asteriscos="";


for (let row = 1; row<=n; row+=1){
    asteriscos+= "*";
    let space = "";
    for (let spaceNumber = n - row; spaceNumber>=0; spaceNumber-=1){
        space +=" ";
    };
    console.log(space+asteriscos);
};
