'use strict';

const add = require('./add');

[true, false, 'foo', [], {}, null, undefined].forEach(value => {
  it(`add(${JSON.stringify(value)}, 42) should throw a TypeError`, () => {
    expect(() => add(value, 42)).toThrow(TypeError);
  });
});

[NaN, Infinity, -Infinity].forEach(value => {
  it(`add(${value}, 42) should throw a RangeError`, () => {
    expect(() => add(value, 42)).toThrow(RangeError);
  });
});

it('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});
