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

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionarTurno = (objeto, key, valor) => {
  objeto[key] = valor;
};

adicionarTurno(lesson2,'turno','manhã');

console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarKeysObjeto = (objeto) => console.log(Object.keys(objeto));

listarKeysObjeto(lesson1);

// 3 -Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = (objeto) => console.log(Object.keys(objeto).length);

tamanhoObjeto(lesson1);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValoresObjeto = (objeto) => console.log(Object.values(objeto));

listarValoresObjeto(lesson1);

// 5 -Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const novaLesson1 = {
  lesson1,
  lesson2,
  lesson3
};

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});

console.log('----------');
console.log(allLessons);
console.log('----------');
console.log(novaLesson1);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (objeto) => {
  const lessons = Object.keys(objeto);
  const novoObjeto = {};
  for (let licao = 0; licao < lessons.length; licao += 1) {
    // console.log(objeto[lessons[licao]].numeroEstudantes);
    novoObjeto[`lessons${licao+1}`] = {};
    novoObjeto[`lessons${licao+1}`].numeroEstudantes = objeto[lessons[licao]].numeroEstudantes;
  }
  return novoObjeto;
};

console.log(totalEstudantes(allLessons));


