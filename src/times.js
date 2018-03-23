'use strict';

module.exports = function times(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('times(): arguments must be numbers');
  }
  return a * b;
};
