'use strict';

const product = require('./product');

describe('state verification (classical testing)', () => {
  it('product() should throw a TypeError', () => {
    expect(() => product()).toThrow();
  });

  it('product(0) should return 0', () => {
    expect(product(0)).toBe(0);
  });

  it('product(1) should return 1', () => {
    expect(product(1)).toBe(1);
  });

  it('product(1, 2) should return 2', () => {
    expect(product(1, 2)).toBe(2);
  });

  it('product(1, 2, 3) should return 6', () => {
    expect(product(1, 2, 3)).toBe(6);
  });

  it('product(1, 2, 3, 4) should return 24', () => {
    expect(product(1, 2, 3, 4)).toBe(24);
  });
});

// We need to do behavior verification to prevent the case where we accidentally
// implemented product() as numbers.reduce(add) rather than numbers.reduce(times) such
// that product(1) happens to be 1 and product(1, 2, 3) happens to to 6 and we only test
// these two cases.
describe('behavior verification (mockist testing)', () => {
  const times = require('./times');
  let reduce = null;

  beforeEach(() => {
    reduce = Array.prototype.reduce;
    Array.prototype.reduce = jest.fn();
  });

  afterEach(() => {
    Array.prototype.reduce = reduce;
  });

  it('product() should call Array.prototype.reduce(times)', () => {
    product();
    expect(Array.prototype.reduce).toHaveBeenCalledWith(times);
  });
});
