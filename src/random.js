'use strict';

/**
 * Math.random() returns a floating-point, pseudo-random number in the range
 * [0, 1); i.e., from 0 (inclusive) up to but not including 1 (exclusive),
 * which you can then scale to your desired range.  The implementation selects
 * the initial seed to the random number generation algorithm; it cannot be
 * chosen or reset by the user.
 */
module.exports = function random() {
  if (arguments.length === 0) {
    return Math.random();
  }

  if (arguments.length === 1) {
    const end = arguments[0];
    if (typeof end !== 'number') {
      throw new TypeError('random(end): end must be a number');
    } else if (!isFinite(end)) {
      throw new RangeError('random(end): end must be a finite number');
    } else if (end <= 0) {
      throw new RangeError('random(end): end must be greater than 0');
    }
    return Math.random() * end;
  }

  if (arguments.length === 2) {
    const start = arguments[0];
    const end = arguments[1];
    if (typeof start !== 'number' || typeof end !== 'number') {
      throw new TypeError('random(start, end): start and end must be numbers');
    } else if (!isFinite(start) || !isFinite(end)) {
      throw new RangeError('random(start, end): start and end must be finite numbers');
    } else if (start >= end) {
      throw new RangeError('random(start, end): start must be smaller than end');
    } else if (end <= 0) {
      throw new RangeError('random(start, end): end must be a greater than 0');
    }
    return Math.random() * (end - start) + start;
  }

  throw new Error('random(): incorrect arguments');
};
