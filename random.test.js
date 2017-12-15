'use strict';

const random = require('./random');

it('random()', () => {
  const frequencies = new Array(10);
  frequencies.fill(0);

  const TOTAL = 100000;
  const TOLERANCE_RATE = 0.05;

  for (let i = 0; i < TOTAL; i++) {
    const r = random();
    expect(r).toBeGreaterThanOrEqual(0);
    expect(r).toBeLessThan(1);
    const index = Math.floor(r / 0.1);
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
