//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorQuantidadeCaracteres(array){
    let caracteres = array[0].split("").length;
    let nome = '';
    for (let key in array){ 
        if (array[key].split("").length>caracteres){
            caracteres = array[key].split("").length;
            nome = array[key];
        };
    };
    return nome;
};

console.log(maiorQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana','Guilherme']));