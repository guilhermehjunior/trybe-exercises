const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});

console.log(allLessons);
console.log(allLessons.lesson1.numeroEstudantes);

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const quantidadeEstudantesPorAula = (objeto, valor) => {
  let estudantes = 0;
  const keys = Object.keys(objeto);
  for (let key = 0; key < keys.length; key += 1) {
    const valores = Object.values(objeto[keys[key]]);
    if (valores.includes(valor)) estudantes += objeto[keys[key]]['numeroEstudantes'];
  }
  return estudantes;
}

console.log(quantidadeEstudantesPorAula(allLessons, 'Matemática'));

// 2- Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const quantidadeEstudantesPorProf = (objeto, valor) => {
  let estudantes = 0;
  const relatorio = {
    professor: valor,
    aulas: [],
    estudantesTotal:0,
  };
  const keys = Object.keys(objeto);
  for (let key = 0; key < keys.length; key += 1) {
    const valores = Object.values(objeto[keys[key]]);
    if (valores.includes(valor)) {
      estudantes += objeto[keys[key]]['numeroEstudantes'];
      relatorio.aulas.push(objeto[keys[key]].materia);
    }
  }
  relatorio.estudantesTotal = estudantes;
  return relatorio;
};

console.log(quantidadeEstudantesPorProf(allLessons, 'Carlos'));