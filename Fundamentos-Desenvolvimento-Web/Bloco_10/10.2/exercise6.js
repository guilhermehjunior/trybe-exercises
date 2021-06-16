const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (!animal) return reject('Nenhum animal com esse nome!');
      return resolve(animal);
    }, 100);
  });
};


const findAnimalByAge = (age) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);
      if (animal.length === 0) return reject('Nenhum animal com essa idade!');
      return resolve(animal);
    }, 100);
  });
};

const getAnimalbyAge =  (age) => {
  return findAnimalByAge(age).then((animal) => animal);
}

getAnimalbyAge(5);


const getAnimal = async (name) => {
  const animal = await findAnimalByName(name);
  return animal;
};


module.exports = {
  getAnimalbyAge,
  getAnimal,
}