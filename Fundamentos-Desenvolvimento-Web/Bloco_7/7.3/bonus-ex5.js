const assert = require('assert');

const verify = (password) => {
  if (password === null) return false
  if (password.length <= 8) return false;
  const regexNumber = /[0-9]/;
  const regexLowerCase = /[a-z]/;
  const regexUpperCase = /[A-Z]/;
  if (!regexNumber.test(password)) return false;
  if (!regexLowerCase.test(password)) return false;
  if (!regexUpperCase.test(password)) return false;
  return true;   
};

assert.strictEqual(typeof verify, 'function');
assert.strictEqual(verify('23af45A'), false);
assert.strictEqual(verify(null), false);
assert.strictEqual(verify('asfsdSaca'), false);
assert.strictEqual(verify('7sfsd7aca'), false);
assert.strictEqual(verify('2145123AA'), false);
assert.strictEqual(verify('a56scSV0a'), true);