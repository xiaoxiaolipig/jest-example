'use strict';

const factorial = require('./factorial');

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

it('factorial(171) should return Infinity', () => {
  // TODO: How to compare big integers in IEEE-754 floating-point notation?
  expect(factorial(171)).toBe(Infinity);
});

it('factorial(-10) should throw an error', () => {
  expect(() => factorial(-10)).toThrow();
});

it('factorial(42.1) should throw an error', () => {
  expect(() => factorial(42.1)).toThrow();
});

it('factorial(NaN) should throw an error', () => {
  expect(() => factorial(NaN)).toThrow();
});

it('factorial(Infinity) should throw an error', () => {
  expect(() => factorial(Infinity)).toThrow();
});

it('factorial(-Infinity) should throw an error', () => {
  expect(() => factorial(-Infinity)).toThrow();
});
