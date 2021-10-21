const fs = require('fs').promises;

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

async function char(id) {
  try {
    const simpson = await charNameById(id);
    console.log(`${simpson.id} - ${simpson.name}`)
  } catch(e) {
    console.log(e.message);
  }
}

char("1");

