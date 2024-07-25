const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('my first Test Case in JavaScript', () => {
  it('tests add function', () => {
    assert.equal(calculateNumber(1, 3.8), 5);
    assert.notEqual(calculateNumber(1, 3.9), 4.9);
    assert.equal(calculateNumber(1.3, 4.5), 6);
    assert.notEqual(calculateNumber(1.3, 4.5), 5.8);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.notEqual(calculateNumber(1.5, 3.7), 5.2);
    assert.strictEqual(calculateNumber(10, 25), 35);
    assert.notStrictEqual(calculateNumber(10, 25), 45);
  });
});
