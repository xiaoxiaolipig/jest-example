'use strict';

const factorial = require('./factorial');

describe('factorial() with nonnumeric argument', () => {
  [true, 'foo', [], {}, null, undefined].forEach(value => {
    it(`factorial(${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => factorial(value)).toThrow(TypeError);
    });
  });
});

it('factorial(171) should return Infinity', () => {
  // TODO: How to compare big integers in IEEE-754 floating-point notation?
  expect(factorial(171)).toBe(Infinity);
});

describe('factorial() with incorrect range', () => {
  it('factorial(42.1) should throw an error', () => {
    expect(() => factorial(42.1)).toThrow();
  });

  [NaN, Infinity, -Infinity, -42].forEach(value => {
    it(`factorial(${value}) should throw a RangeError`, () => {
      expect(() => factorial(value)).toThrow(RangeError);
    });
  });
});

describe('factorial() with normal arguments', () => {
  it('factorial(0) should return 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('factorial(1) should return 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('factorial(2) should return 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('factorial(10) should return 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  it('factorial(170) should return 7.257415615307994e+306', () => {
    // TODO: How to compare big integers in IEEE-754 floating-point notation?
    expect(factorial(170)).toBeCloseTo(7.257415615307994e+306);
  });
});
