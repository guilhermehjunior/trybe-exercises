const readline = require('readline-sync');
const fs = require('fs').promises;

const questionsForUser = () => {
  const file = readline.question('Qual o arquivo deseja ler?\n');
  const palavraSubstituida = readline.question('Qual palavra deve ser trocada?\n');
  const palavraSubstituta = readline.question('Qual a nova palavra?\n');
  return [file, palavraSubstituida, palavraSubstituta];
}

const userChoosesFileToSwapWords = async () => {
  try {
    const [file, palavraSubstituida, palavraSubstituta] = questionsForUser();
    const fileText = await fs.readFile(`./${file}`, 'utf-8');
    const regex = new RegExp(palavraSubstituida, 'i');
    const newFileText = fileText.replace(regex, palavraSubstituta);
    console.log(`O texto do arquivo eh: ${newFileText}`);
  } catch (e) {
    console.log(e.message);
  }
};

userChoosesFileToSwapWords();