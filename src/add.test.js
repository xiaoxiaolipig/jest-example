'use strict';

const add = require('./add');

[true, false, 'foo', [], {}, null, undefined].forEach(value => {
  it(`add(${JSON.stringify(value)}, 42) should throw a TypeError`, () => {
    expect(() => add(value, 42)).toThrow(TypeError);
  });
});

it('add(Infinity, 42) should return Infinity', () => {
  expect(add(Infinity, 42)).toBe(Infinity);
});

it('add(-Infinity, 42) should return -Infinity', () => {
  expect(add(-Infinity, 42)).toBe(-Infinity);
});

it('add(NaN, 42) should return NaN', () => {
  expect(add(NaN, 42)).toBeNaN();
});

it('add(Infinity, Infinity) should return Infinity', () => {
  expect(add(Infinity, Infinity)).toBe(Infinity);
});

it('add(-Infinity, -Infinity) should return -Infinity', () => {
  expect(add(-Infinity, -Infinity)).toBe(-Infinity);
});

it('add(Infinity, -Infinity) should return NaN', () => {
  expect(add(Infinity, -Infinity)).toBeNaN();
});

it('add(NaN, Nan) should return NaN', () => {
  expect(add(NaN, NaN)).toBeNaN();
});

it ('add() should throw a TypeError', () => {
  expect(() => add()).toThrow(TypeError);
});

it ('add(1) should throw a TypeError', () => {
  expect(() => add(1)).toThrow(TypeError);
});

it('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});
