const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should correctly sum rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6); // 1 + 5
    expect(calculateNumber('SUM', 1.6, 2.3)).to.equal(4); // 2 + 2
    expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4); // -1 + -3
  });

  it('should correctly subtract rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3); // 4 - 1
    expect(calculateNumber('SUBTRACT', 5.5, 3.5)).to.equal(2); // 6 - 4
    expect(calculateNumber('SUBTRACT', -2.8, -3.2)).to.equal(0); // -3 + 3
  });

  it('should correctly divide rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 6, 2)).to.be.equal(3);
    expect(calculateNumber('DIVIDE', 3.3, 1)).to.be.equal(3);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.7, 3.7)).to.be.equal(0.5);
    expect(calculateNumber('DIVIDE', -6, 3)).to.be.equal(-2);
    expect(calculateNumber('DIVIDE', -6, -3)).to.be.equal(2);
    expect(calculateNumber('DIVIDE', -6.2, -3.4)).to.be.equal(2);
    expect(calculateNumber('DIVIDE', -2, 2.1)).to.be.equal(-1);

    expect(calculateNumber('DIVIDE', 7.7, 2.1)).to.be.equal(4); // 8 / 2
    expect(calculateNumber('DIVIDE', -6.2, 2.3)).to.be.equal(-3); // -6 / 2
    expect(calculateNumber('DIVIDE', 7.7, 2.1)).to.equal(4); // 8 / 2
    expect(calculateNumber('DIVIDE', -6.2, 2.3)).to.equal(-3); // -6 / 2
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 3.4, 0.4)).to.equal('Error'); // 3 / 0
    expect(calculateNumber('DIVIDE', 3.5, 0.2)).to.equal('Error'); // 4 / 0
  });

  it('should handle edge cases', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('DIVIDE', 0, 1.5)).to.equal(0); // 0 / 2
  });
});