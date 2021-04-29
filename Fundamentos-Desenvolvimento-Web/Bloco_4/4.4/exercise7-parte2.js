//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function finalInterrogacao(string1,string2) {
    for(let key in string2){
        if (string2[key]!==string1[string1.length-(-key+string2.length)]){
            return false;
        };
    };
    return true;
};

console.log(finalInterrogacao('Guilherme','pe'));

