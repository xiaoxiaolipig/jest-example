'use strict';

it('test undefined', () => {
  const foo = { bar: undefined };

  expect(foo.bar).toBe(undefined);
  expect(foo.bar).toBeUndefined();
  expect(foo.bar).not.toBeDefined();

  expect(foo.baz).toBe(undefined);
  expect(foo.baz).toBeUndefined();
  expect(foo.baz).not.toBeDefined();
});
