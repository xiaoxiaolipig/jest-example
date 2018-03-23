'use strict';

const times = require('./times');

module.exports = function product(...numbers) {
  return numbers.reduce(times);
};
