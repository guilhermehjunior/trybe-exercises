//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let asteriscos="";

for(let row=1; row<=n;row+=1){
    asteriscos += "*";
    let space = "";
    let middleSpace ="";
    for(let spaceIndex = (n-row)/2;spaceIndex>0;spaceIndex-=1){
        space += " ";
    };
    if(row%2!==0){
        if (row === 1 || row === n ){
            console.log(space+asteriscos+space);
        }else{
            for(let spaceIndex2 = row-2;spaceIndex2>0;spaceIndex2-=1){
                middleSpace+=" ";
            };
            console.log(space+"*"+middleSpace+"*"+space); 
        }; 
    };
};