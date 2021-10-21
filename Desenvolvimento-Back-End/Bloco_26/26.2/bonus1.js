const readline = require('readline-sync');
const fs = require('fs').promises;

const userChoosesFile = async () => {
  const file = readline.question('Qual o arquivo deseja ler?\n');
  const fileText = await fs.readFile(`./${file}`, 'utf-8');
  console.log(`O texto do arquivo eh: ${fileText}`);
};

userChoosesFile();