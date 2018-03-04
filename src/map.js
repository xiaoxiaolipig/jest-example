'use strict';

/**
 * If a `thisArg` parameter is provided to map, it will be used as callback's
 * `this` value.  Otherwise, the value `undefined` will be used as its `this`
 * value.  The `this` value ultimately observable by callback is determined
 * according to the usual rules for determining the `this` seen by a function.
 */
module.exports = function map(array, callback, thisArg) {
  if (!Array.isArray(array)) {
    throw new TypeError('map(): first argument must be an array');
  }
  // if (array.length > 0 && typeof callback !== 'function') {
  //   throw new TypeError('map(): second argument must be a function');
  // }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback.call(thisArg, array[i], i, array));
  }
  return result;
};
