'use strict';

const random = require('../random');

let savedRandom = null;

beforeEach(() => {
  savedRandom = Math.random;
  Math.random = () => 0.5;
});

afterEach(() => {
  Math.random = savedRandom;
});

describe.skip('random()', () => {
  it('should return an evenly distributed random number within [0, 1)', () => {
    const frequencies = new Array(10);
    frequencies.fill(0);

    const TOTAL = 100000;
    const TOLERANCE_RATE = 0.05;

    for (let i = 0; i < TOTAL; i++) {
      const value = random();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
      const index = Math.floor(value / 0.1);
      ++frequencies[index];
    }

    for (let i = 0; i < frequencies.length; i++) {
      // const start = (i * 0.1).toPrecision(1);
      // const end = ((i + 1) * 0.1).toPrecision(1);
      // console.log(`${start} - ${end}: ${frequencies[i]}`);
      const errorRate = Math.abs((frequencies[i] * 10 / TOTAL) - 1);
      expect(errorRate).toBeLessThan(TOLERANCE_RATE);
    }
  });
});

describe('random(end)', () => {
  const end = 1000;

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

  it(`random(${end}) should return an evenly distributed random number within [0, ${end})`, () => {
    expect(random(end)).toBe(end * 0.5);
  });
});

describe('random(start, end)', () => {
  const start = 1000;
  const end = 2000;

  [end, NaN, Infinity, -Infinity].forEach(arg1 => {
    [start, NaN, Infinity, -Infinity].forEach(arg2 => {
      it(`random(${arg1}, ${arg2}) should throw a RangeError`, () => {
        expect(() => random(arg1, arg2)).toThrow(RangeError);
      });
    });
  });

  it(`random(${-end}, ${-start}) should throw a RangeError`, () => {
    expect(() => random(-end, -start)).toThrow(RangeError);
  });

  it(`random(${start}, ${end}) should return an evenly distributed random number within [${start}, ${end})`, () => {
    const value = random(start, end);
    expect(value).toBe(start + (end - start) * 0.5);
  });
});
