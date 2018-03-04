'use strict';

module.exports = function divide(divisor, dividend) {
  if (typeof divisor !== 'number' || typeof dividend !== 'number') {
    throw new TypeError('divide(): arguments must be numbers');
  }
  return divisor / dividend;
};
