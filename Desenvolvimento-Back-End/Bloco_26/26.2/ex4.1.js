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

