const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('my first test case in js', () => {
  it('integer whole numbers', () => {
    assert.strictEqual(calculateNumber(5, 5), 10);
  });
  it('floating whole numbers', () => {
    assert.strictEqual(calculateNumber(6.0, 7.0), 13);
  });
  it('rounding down b', () => {
    assert.strictEqual(calculateNumber(2.0, 3.4), 5);
  });
  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(3.4, 5), 8);
  });
  it('round down both a and b', () => {
    assert.strictEqual(calculateNumber(3.4, 2.4), 5);
  });
  it('round up b', () => {
    assert.strictEqual(calculateNumber(6.0, 7.7), 14);
  });
  it('rounds up a', () => {
    assert.strictEqual(calculateNumber(3.7, 5), 9);
  });
  it('rounds up both a and b', () => {
    assert.strictEqual(calculateNumber(4.5, 4.5), 10);
  });
  it('rounds down recurring decimals', () => {
    assert.strictEqual(calculateNumber(9.456789, 6.48765), 15);
  });
});
