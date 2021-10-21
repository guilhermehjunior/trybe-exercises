const simpsons = require('./simpsons.json');

function simpsonsIdName(characterArray){
  characterArray.forEach(({id, name}) => {
    console.log(`${id} - ${name}`);
  });
}

simpsonsIdName(simpsons);