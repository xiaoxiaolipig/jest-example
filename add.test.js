'use strict';

const add = require('./add');

it('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

it(`add('foo', 2) should throw a TypeError`, () => {
  expect(() => add('foo', 2)).toThrow(TypeError);
});

it('add(Infinity, 2) should throw an error', () => {
  expect(() => add(Infinity, 2)).toThrow();
});

it('add(NaN, 2) should throw an error', () => {
  expect(() => add(NaN, 2)).toThrow();
});
