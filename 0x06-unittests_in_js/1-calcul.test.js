const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('tests SUM', function () {
      const result = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(result, 6);
    })
  })
  describe('SUBTRACT', function () {
    it('tests SUBTRACT', function () {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(result, -4);
    })
  })
  describe('DIVIDE', function () {
    it('tests DIVIDE', function () {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    })
    it('tests DIVIDE when 0 is the divisor', function () {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(result, 'Error');
    })
  })
});
