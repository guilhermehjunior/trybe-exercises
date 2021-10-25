const fs = require('fs').promises;

const readSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
};

module.exports = readSimpsons;