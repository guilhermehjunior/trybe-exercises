// Exercicio2

const sorteio = (numero, func) => {
  const numeroAleatorio = Math.ceil(Math.random()*5);
  return func(numero, numeroAleatorio);
}

const resultado = (numero, numeroSortiado) => {
  if (numero === numeroSortiado) return 'Parabéns você ganhou';
  else return 'Tente outra vez';
}

console.log(sorteio(3, resultado));
console.log(sorteio(3, resultado));
console.log(sorteio(3, resultado));
console.log(sorteio(3, resultado));