const fs = require('fs').promises;

async function addNewSimpson() {
  try {
    const result = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(result);
    const nelson = { id: "5", name: "Nelson Muntz" };
    simpsons.push(nelson);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
  } catch (e) {
    console.log(e.message);
  }
}

addNewSimpson();