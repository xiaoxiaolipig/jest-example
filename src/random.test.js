'use strict';

const random = require('./random');

let savedRandom = null;

beforeEach(() => {
  savedRandom = Math.random;
  Math.random = jest.fn(() => 0.5);
});

afterEach(() => {
  Math.random = savedRandom;
});

describe('random()', () => {
  it('should call Math.random()', () => {
    random();
    expect(Math.random).toHaveBeenCalled();
  });

  it('should return Math.random()', () => {
    expect(random()).toBe(0.5);
  });
});

describe('random(end)', () => {
  [true, false, 'foo', [], {}, null, undefined].forEach(value => {
    it(`random(${JSON.stringify(value)}) should throw a TypeError`, () => {
      expect(() => random(value)).toThrow(TypeError);
    });
  });

  [NaN, Infinity, -Infinity, 0, -42].forEach(value => {
    it(`random(${value}) should throw a RangeError`, () => {
      expect(() => random(value)).toThrow(RangeError);
    });
  });

  it('random(1) should return Math.random() * 0.1', () => {
    expect(random(0.1)).toBe(0.05);
  });

  it('random(1) should return Math.random() * 1', () => {
    expect(random(1)).toBe(0.5);
  });

  it('random(10) should return Math.random() * 10', () => {
    expect(random(10)).toBe(5);
  });

  it('random(100) should return Math.random() * 100', () => {
    expect(random(100)).toBe(50);
  });
});

describe('random(start, end)', () => {
  [0, true, false, 'foo', [], {}, null, undefined].forEach(start => {
    [1, true, false, 'foo', [], {}, null, undefined].forEach(end => {
      if (typeof start === 'number' && typeof end === 'number' && start < end) {
        return;
      }
      it(`random(${JSON.stringify(start)}, ${JSON.stringify(end)}) should throw a TypeError`, () => {
        expect(() => random(start, end)).toThrow(TypeError);
      });
    });
  });

  [1, NaN, Infinity, -Infinity].forEach(start => {
    [0, NaN, Infinity, -Infinity].forEach(end => {
      it(`random(${start}, ${end}) should throw a RangeError`, () => {
        expect(() => random(start, end)).toThrow(RangeError);
      });
    });
  });

  it(`random(-10, 0) should throw a RangeError`, () => {
    expect(() => random(-10, 0)).toThrow(RangeError);
  });

  it(`random(-20, -10) should throw a RangeError`, () => {
    expect(() => random(-20, -10)).toThrow(RangeError);
  });

  it('random(a, b, c) should throw an error', () => {
    expect(() => random(1, 2, 3)).toThrow(Error);
  });

  it('random(start, end) should return Math.random() * (end - start) + start', () => {
    expect(random(10, 20)).toBe(15);
  });
});
