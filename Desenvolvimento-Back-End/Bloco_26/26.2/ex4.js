const simpsons = require('./simpsons.json');

function simpsonsIdName(characterArray) {
  characterArray.forEach(({id, name}) => {
    console.log(`${id} - ${name}`);
  });
}

// simpsonsIdName(simpsons);


function charNameById(id) {
  const promise = new Promise((resolve, reject) => {
    simpsons.forEach((simpson) => {
      if (simpson.id === id) return resolve(simpson);
    });
    reject(new Error('id não encontrado'));
  });
  return promise;
}

// async function char(id) {
//   try {
//     const simpson = await charNameById(id);
//     console.log(`${simpson.id} - ${simpson.name}`)
//   } catch(e) {
//     console.log(e.message);
//   }
// }

// char("17");