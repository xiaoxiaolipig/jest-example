'use strict';

module.exports = function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('factorial: argument must be a number');
  }
  if (!isFinite(n)) {
    throw new Error('factorial: argument must be a finite number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('factorial: argument must be an integer');
  }
  if (n < 0) {
    throw new Error('factorial: argument must be greater than or equal to 0');
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};
