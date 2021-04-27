//3- Agora inverta o lado do triângulo. Por exemplo:

let n=6;
let asteriscos="";

for (let row = 1; row<=n; row+=1){
    asteriscos+= "*";
    let space="";
    for (let spaceIndex= n-row; spaceIndex>0; spaceIndex-=1){
        space +=" ";
    };
    console.log(space+asteriscos);
};
