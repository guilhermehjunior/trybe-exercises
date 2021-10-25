const returnPromise = require('./ex1');

function randomNumber() {
  const random = Math.floor(Math.random() * 100 + 1);
  return random;
}

async function main() {
  try {
    const resultado = await returnPromise('a', randomNumber(), randomNumber());
    console.log(`O resultado eh: ${resultado}`);
  } catch (e){
    console.log(e.message);
  }
}

main();