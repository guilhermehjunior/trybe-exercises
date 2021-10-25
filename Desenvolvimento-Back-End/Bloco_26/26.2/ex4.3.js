const fs = require('fs').promises;

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