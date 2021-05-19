// Exercicio1

const fatorial = (number) => {
  let fatorial = 1;
  for (let numero = 2; numero <= number; numero +=1 ) {
    fatorial *= numero;
  }
  return fatorial;
}


const fatorial2 = (number) => number <= 1 ? 1 : fatorial(number);


console.log(fatorial2(0));

// Exercicio2

const longestWord = (string) => {
  const palavrasString = string.split(' ');
  let palavraComMaisCaracteres = '';
  let maisCaracteres = 0;
  palavrasString.forEach(element => {
    let caracteres = element.split('').length;
    if (maisCaracteres < caracteres) {
      palavraComMaisCaracteres = element;
      maisCaracteres = caracteres;
    } 
  });
  return palavraComMaisCaracteres;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

//Exercicio 3

const botao = document.querySelector('#contador');
const h1 = document.querySelector('#contagem');

let clickCount = 0;

botao.addEventListener('click', () => {
  clickCount += 1;
  h1.innerHTML = clickCount;
});

//Exercicio 4

const funcao1 = (string) => string.replace('x','Guilherme');
  
console.log(funcao1('Xaxixo'));

const vetorGlobal = ['Memoria', 'Mestre no TFT', 'JavaScript', 'HTML', 'CSS'];

const funcao2 = (string) => {
  let frase = `${funcao1(string)} Minhas cinco principais habilidades sao:`;
  vetorGlobal.sort().forEach(element => {
    frase += `
    -> ${element}` 
  });
  return frase;
}

console.log (funcao2('Tryber x Aqui!'));