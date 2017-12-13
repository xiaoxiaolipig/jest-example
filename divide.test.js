'use strict';

const divide = require('./divide');

it('divide(6, 3) should return 2', () => {
  expect(divide(6, 3)).toBe(2);
});

it('divide(6, 0) should throw an error', () => {
  expect(() => divide(6, 0)).toThrow();
});

it(`divide('foo', 3) should throw a TypeError`, () => {
  expect(() => divide('foo', 0)).toThrow(TypeError);
});
