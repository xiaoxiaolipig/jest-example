'use strict';

module.exports = function forEach(items, callback) {
  if (!Array.isArray(items)) {
    throw new TypeError('forEach(): first argument must be an array');
  } else if (typeof callback !== 'function') {
    throw new TypeError('forEach(): second argument must be a function');
  }
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};
