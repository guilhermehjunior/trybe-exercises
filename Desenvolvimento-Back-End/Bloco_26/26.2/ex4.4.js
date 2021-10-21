const fs = require('fs').promises;


async function creatingNewSimpsonsFile() {
  try {
    const result = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(result);
    const newSimpsons = [];
    simpsons.forEach((simpson) => {
      for (let index = 1; index <= 4; index += 1) {
        if (simpson.id == index) {
          newSimpsons.push(simpson);
        }
      }
    });
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
  } catch (e) {
    console.log(e.message);
  }
}

creatingNewSimpsonsFile();