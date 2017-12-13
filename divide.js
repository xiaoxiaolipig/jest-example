'use strict';

module.exports = function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('The arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Divide by zero');
  }
  return a / b;
};
