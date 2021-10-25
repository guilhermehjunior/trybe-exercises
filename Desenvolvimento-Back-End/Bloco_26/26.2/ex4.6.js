const fs = require('fs').promises;

async function changeNelson() {
  try {
    const result = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(result);
    simpsons.forEach((simpson) => {
      if(simpson.name === 'Nelson Muntz') simpson.name = 'Maggie Simpson';
    })
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
  } catch (e) {
    console.log(e.message);
  }
}

changeNelson();