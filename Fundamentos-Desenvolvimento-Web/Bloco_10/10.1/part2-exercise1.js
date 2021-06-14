function letterToNumber(string) {
  if (string === 'a') {
    return '1';
  } if (string === 'e') {
    return '2';
  } if (string === 'i') {
    return '3';
  } if (string === 'o') {
    return '4';
  } if (string === 'u') {
    return '5';
  }
  return string;
}

function encode(string) {
  let newString = string.split('');
  for (let key in newString) {
    newString[key] = letterToNumber(newString[key]);
  }
  return newString.join('');
}

function NumberToLetter(string) {
  if (string === '1') {
    return 'a';
  } if (string === '2') {
    return 'e';
  } if (string === '3') {
    return 'i';
  } if (string === '4') {
    return 'o';
  } if (string === '5') {
    return 'u';
  }
  return string;
}

function decode(string) {
  let newString = [];
  newString = string.split('').map((letra) => NumberToLetter(letra));
  return newString.join('');
}

console.log(decode('H2ll4 Th2r2'));

module.exports = {
  encode,
  decode,
};