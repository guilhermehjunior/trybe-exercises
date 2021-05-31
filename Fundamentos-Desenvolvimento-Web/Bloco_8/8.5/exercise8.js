const assert = require('assert');

// escreva greet abaixo

const greet = (string1, string2 = 'Hi') => `${string2} ${string1}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');