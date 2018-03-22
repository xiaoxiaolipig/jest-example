'use strict';

const sum = require('./sum');

describe('state verification (classical testing)', () => {
  it('sum() should throw a TypeError', () => {
    expect(() => sum()).toThrow(TypeError);
  });

  it('sum(1) should return 1', () => {
    expect(sum(42)).toBe(42);
  });

  it('sum(1, 2) should return 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('sum(1, 2, 3) should return 6', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});

describe('behavior verification (mockist testing)', () => {
  const add = require('./add');
  let reduce = null;

  beforeEach(() => {
    reduce = Array.prototype.reduce;
    Array.prototype.reduce = jest.fn();
  });

  afterEach(() => {
    Array.prototype.reduce = reduce;
  });

  it('sum() should call Array.prototype.reduce(add)', () => {
    sum();
    expect(Array.prototype.reduce).toBeCalledWith(add);
  });
});
