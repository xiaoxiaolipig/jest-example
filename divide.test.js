'use strict';

const divide = require('./divide');

it('divide(42, 2) should return 21', () => {
  expect(divide(6, 3)).toBe(2);
});

it('divide(42, 0) should return Infinity', () => {
  expect(divide(42, 0)).toBe(Infinity);
});

it('divide(-42, 0) should return -Infinity', () => {
  expect(divide(-42, 0)).toBe(-Infinity);
});

it('divide(42, -0) should return -Infinity', () => {
  expect(divide(42, -0)).toBe(-Infinity);
});

it('divide(-42, -0) should return Infinity', () => {
  expect(divide(-42, -0)).toBe(Infinity);
});

it('divide(0, 0) should return NaN', () => {
  expect(isNaN(divide(0, 0))).toBe(true);
});

it(`divide('foo', 3) should throw a TypeError`, () => {
  expect(() => divide('foo', 3)).toThrow(TypeError);
});
