const fs = require('fs').promises;

async function creatingNewSimpsonsFile() {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(result);
    const newSimpsons = [];
    simpsons.forEach((simpson) => {
      if (["1","2","3","4"].includes(simpson.id)) {
        newSimpsons.push(simpson);
      }
    });
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
  } catch (e) {
    console.log(e.message);
  }
}

creatingNewSimpsonsFile();