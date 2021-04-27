//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function verificaPalindrome(word){
    let letters = word.split("")
    for(let index = 1; index< letters.length;index+=1){
        if (letters[index-1]===letters[letters.length-index]){
        }else{
            return false
        };
    };
    return true
}

console.log(verificaPalindrome('ayttya'));