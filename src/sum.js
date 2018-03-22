'use strict';

const add = require('./add');

module.exports = function sum(...args) {
  return args.reduce(add);
};
