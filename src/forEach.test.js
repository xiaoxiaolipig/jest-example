'use strict';

const forEach = require('./forEach');

describe('forEach() with incorrect argument type', () => {
  [true, false, 42, 'foo', {}, null, undefined].forEach((value) => {
    it(`forEach(${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => forEach(value)).toThrow(TypeError);
    });
  });

  [true, false, 42, 'foo', {}, null, undefined].forEach((value) => {
    it(`forEach([], ${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => forEach([], value)).toThrow(TypeError);
    });
  });
});

describe('forEach([], callback)', () => {
  const callback = jest.fn();
  forEach([], callback);

  it('should NOT call the callback', () => {
    expect(callback).not.toHaveBeenCalled();
  });
});

describe('forEach([1, 2, 3], callback)', () => {
  const callback = jest.fn();
  forEach([1, 2, 3], callback);

  it('should call the callback three times', () => {
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('should call the callback with correct argument', () => {
    expect(callback).toHaveBeenCalledWith(1);
    expect(callback).toHaveBeenCalledWith(2);
    expect(callback).toHaveBeenCalledWith(3);
  });
});
