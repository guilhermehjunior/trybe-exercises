const fs = require('fs').promises;

//  async function simpsonsIdName() {
//   try {
//     const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
//       JSON.parse(simpsons).forEach(({id, name}) => {
//         console.log(`${id} - ${name}`);
//       });
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// simpsonsIdName();

function charNameById(id) {
  const promise = new Promise( async (resolve, reject) => {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    JSON.parse(simpsons).forEach((simpson) => {
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

// char("1");


async function removeChars() {
  try {
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
    simpsons.forEach(({id}, index) => {
      if (id === "6" || id ==="10") {
        simpsons.splice(index, 1);
      }
    });
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
    console.log('Arquivo escrito com sucesso');
  } catch (e) {
    console.log(e.message);
  }
}

removeChars();