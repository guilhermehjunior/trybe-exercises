const returnPromise = require('./ex1');

function randomNumber() {
  const random = Math.floor(Math.random() * 100 + 1);
  return random;
}

returnPromise('a', randomNumber(), randomNumber())
  .then((result) => console.log(`O resultado foi: ${result}`))
  .catch((error) => console.log(error.message));