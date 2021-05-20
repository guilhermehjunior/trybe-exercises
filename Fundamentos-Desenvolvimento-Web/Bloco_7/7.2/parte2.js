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
