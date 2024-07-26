const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('combining descriptions', () => {
  it('should correctly sum rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5
    assert.strictEqual(calculateNumber('SUM', 1.6, 2.3), 4); // 2 + 2
    assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4); // -1 + -3
  });

  it('should correctly subtract rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3); // 4 - 1
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.5), 2); // 6 - 4
    assert.strictEqual(calculateNumber('SUBTRACT', -2.8, -3.2), 0); // -3 + 3
  });

  it('should correctly divide rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7.7, 2.1), 4); // 8 / 2
    assert.strictEqual(calculateNumber('DIVIDE', 9.5, 2.9), 3); // 10 / 3
    assert.strictEqual(calculateNumber('DIVIDE', -6.2, 2.3), -3); // -6 / 2
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.4, 0.4), 'Error'); // 3 / 0
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0.2), 'Error'); // 4 / 0
  });

  it('should handle edge cases', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 1.5), 0); // 0 / 2
  });
});
