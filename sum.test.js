'use strict';

const sum = require('./sum');

it('sum() without arguments should return 0', () => {
  expect(sum()).toBe(0);
});

it('sum(42) should return 42', () => {
  expect(sum(42)).toBe(42);
});

it('sum(1, 2, 3, 4) should return 10', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
