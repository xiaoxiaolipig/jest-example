'use strict';

const map = require('./map');

describe('map()', () => {
  [true, false, 42, 'foo', {}, null, undefined].forEach(value => {
    it(`map(${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => map(value)).toThrow(TypeError);
    });
  });

  it('map() should throw a TypeError', () => {
    expect(map).toThrow(TypeError);
  });
});

describe.skip('map([])', () => {
  it('should not throw any error', () => {
    expect(() => map([])).not.toThrow();
  });

  it('should return an empty array', () => {
    expect(map([])).toEqual([]);
  })
});

describe('map([], callback)', () => {
  const callback = jest.fn();
  const result = map([], callback);

  it('should not call the callback', () => {
    expect(callback).not.toHaveBeenCalled();
  });

  it('should return an empty array', () => {
    expect(result).toEqual([]);
  });
});

describe('map([1, 2, 3], ...)', () => {
  [42, 'foo', {}, null, undefined].forEach(value => {
    it(`map([1, 2, 3], ${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => map([1, 2, 3], value)).toThrow(TypeError);
    });
  });
});

describe('map([1, 2, 3], callback)', () => {
  const callback = jest.fn(value => 2 * value);
  const result = map([1, 2, 3], callback);

  it('should call the callback 3 times', () => {
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('should call the callback with correct arguments', () => {
    expect(callback.mock.calls[0].this).toBeUndefined();
    expect(callback).toHaveBeenCalledWith(1, 0, [1, 2, 3]);

    expect(callback.mock.calls[1].this).toBeUndefined();
    expect(callback).toHaveBeenCalledWith(2, 1, [1, 2, 3]);

    expect(callback.mock.calls[2].this).toBeUndefined();
    expect(callback).toHaveBeenCalledWith(3, 2, [1, 2, 3]);
  });

  it('should return [2, 4, 6]', () => {
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('map([1, 2, 3], callback, thisArg)', () => {
  const callback = jest.fn(value => value * 2);
  const result = map([1, 2, 3], callback, { foo: 'bar' });

  it('should call the callback 3 times', () => {
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it(`should call the callback with \`this\` set to the specified object`, () => {
    expect(callback.mock.instances).toEqual([
      { foo: 'bar' },
      { foo: 'bar' },
      { foo: 'bar' },
    ]);
  });

  it(`should return the correct array`, () => {
    expect(result).toEqual([2, 4, 6]);
  });
});
