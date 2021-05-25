// Exercicio 3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacaoProva = (gabarito, respostas, func) => {
  return func(gabarito, respostas);
}

const contagemPontuacao = (gabarito, respostas) =>  {
  let contagem = 0;
  for (let resposta = 0; resposta < gabarito.length;) {
    if (respostas[resposta] === 'N.A') resposta += 1;
    else if (respostas[resposta] === gabarito[resposta]) {
      contagem += 1;
      resposta += 1;
    } else {
      contagem -= 0.5;
      resposta +=1;
    }
  }
  return contagem;
}

console.log(pontuacaoProva(rightAnswers,studentAnswers,contagemPontuacao));
console.log(pontuacaoProva(['A','B','C'],['N.A','B','A'],contagemPontuacao));