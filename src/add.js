'use strict';

module.exports = function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add(): arguments must be numbers');
  }
  return a + b;
};
