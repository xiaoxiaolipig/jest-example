'use strict';

const times = require('./times');

it('times() should throw a TypeError', () => {
  expect(() => times()).toThrow(TypeError);
});

it('times(1) should throw a TypeError', () => {
  expect(() => times(1)).toThrow(TypeError);
});

describe('Infinity, -Infinity, NaN', () => {
  [Infinity, -Infinity, NaN, 0].forEach(a => {
    [Infinity, -Infinity, NaN, 0].forEach(b => {
      it(`times(${a}, ${b}) should return ${a * b}`, () => {
        if (isNaN(a * b)) {
          expect(times(a, b)).toBeNaN();
        } else {
          expect(times(a, b)).toBe(a * b);
        }
      });
    });
  });
});

it('times(0, 0) should return 0', () => {
  expect(times(0, 0)).toBe(0);
});

it('times(0, 1) should return 0', () => {
  expect(times(0, 1)).toBe(0);
});

it('times(1, 0) should return 0', () => {
  expect(times(1, 0)).toBe(0);
});

it('times(1, 1) should return 1', () => {
  expect(times(1, 1)).toBe(1);
});

it('times(1, 2) should return 2', () => {
  expect(times(1, 2)).toBe(2);
});

it('times(2, 3) should return 6', () => {
  expect(times(2, 3)).toBe(6);
});
