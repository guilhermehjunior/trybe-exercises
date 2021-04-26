//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;
let asteriscos="";

for(let row = 1; row<=n;row+=1){
    asteriscos += "*";
    let space = "";
    if (row%2!==0){
        for(let spaceIndex = (n-row)/2;spaceIndex>0;spaceIndex=1){
            space += " ";
        };
        console.log(space+asteriscos+space);
    }; 
};

