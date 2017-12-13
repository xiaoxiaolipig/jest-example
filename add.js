'use strict';

module.exports = function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add(): arguments must be numbers');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('add(): arguments must be finite numbers');
  }
  return a + b;
};
