const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const { expect } = chai;

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('tests SUM', function () {
      const result = calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    })
  })
  describe('SUBTRACT', function () {
    it('tests SUBTRACT', function () {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    })
  })
  describe('DIVIDE', function () {
    it('tests DIVIDE', function () {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.equal(0.2);
    })
    it('tests DIVIDE when 0 is the divisor', function () {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      expect(result).to.equal('Error');
    })
  })
});
