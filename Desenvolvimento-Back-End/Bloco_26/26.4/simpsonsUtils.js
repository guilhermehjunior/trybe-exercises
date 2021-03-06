const fs = require('fs').promises;

const readSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
};

const writeSimpsons = async (simpsons) => {
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
};

module.exports = { readSimpsons, writeSimpsons };