const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('my first Test Case in JavaScript', () => {
  it('tests add function', () => {
    assert.strictEqual(calculateNumber(10, 25), 35);
    assert.notStrictEqual(calculateNumber(10, 25), 45);
  });
});
