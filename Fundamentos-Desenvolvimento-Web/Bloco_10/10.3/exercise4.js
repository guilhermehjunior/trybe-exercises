function stringToUpperCase(string) {
  return string.toUpperCase();
}

function firstLetterString(string) {
  return string.split('')[0];
}

function concatStrings(string1, string2) {
  return `${string1}${string2}`;
}

module.exports = {
  stringToUpperCase,
  firstLetterString,
  concatStrings,
}