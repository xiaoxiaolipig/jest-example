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

// it('mohan should return a', () => {
//   expect(mohan(1)).toBe(1);
// });

// it('add(1, 2) should return 3', () => {
//   const mockFn = jest.fn(() => true);
//   mockFn();
//   expect(mockFn).toHaveBeenCalled();
//   //expect(mockFn).toHaveReturned();
// });
// test("isMockFunction", () => {
//   function common() {
//     return true;
//   }

//   const mockFn = jest.fn();

//   expect(jest.isMockFunction(common)).toBeFalsy();
//   expect(jest.isMockFunction(mockFn)).toBeTruthy();
// });

  
// test("fn", () => {
//   const mockFn = jest.fn();
//   mockFn();
//   expect(mockFn).toHaveBeenCalled();

//   // With a mock implementation:
//   const returnsTrue = jest.fn(() => true);
//   expect(returnsTrue()).toBeTruthy();
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// let shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

// test('the shopping list has beer on it', () => {
//   expect(shoppingList).toContain('diapers');
// })
// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });