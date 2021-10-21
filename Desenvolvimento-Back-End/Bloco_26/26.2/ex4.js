const fs = require('fs').promises;

 async function simpsonsIdName() {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
      JSON.parse(simpsons).forEach(({id, name}) => {
        console.log(`${id} - ${name}`);
      });
  } catch (e) {
    console.log(e.message);
  }
}

simpsonsIdName();

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