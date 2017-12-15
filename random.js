'use strict';

/**
 * The Math.random() function returns a floating-point, pseudo-random number in
 * the range [0, 1); that is, from 0 (inclusive) up to but not including 1
 * (exclusive), which you can then scale to your desired range.  The
 * implementation selects the initial seed to the random number generation
 * algorithm; it cannot be chosen or reset by the user.
 */
module.exports = function random() {
  return Math.random();
};
