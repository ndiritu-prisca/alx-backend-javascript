const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('tests two whole number', function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4); 
  });
  it('tests a whole number and float', function () {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5); 
  });
  it('tests two floats', function () {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5); 
  });
  it('tests two negative floats', function () {
    const result = calculateNumber(-1.5, -3.7);
    assert.strictEqual(result, -5); 
  });
});
