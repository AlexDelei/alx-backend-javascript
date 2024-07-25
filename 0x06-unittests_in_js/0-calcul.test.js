const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('my first test case in js', () => {
  it('should add two numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    assert.strictEqual(calculateNumber(1.6, 2.4), 4);
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });
  it('should handle test cases', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});
