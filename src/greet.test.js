'use strict';

const greetWorld = require('./greet');

// const greetWorld = {
//     greetingFn() {
//       console.log('does something');
//     }
//   };


describe('greetWorld calls the greeting function properly', () => {
    // const greetImplementation = name => `${name}!`;
    // const mockFn = jest.fn(greetImplementation);
    // const value = greetWorld(mockFn);
    // expect(mockFn).toHaveBeenCalled();
    // expect(mockFn).toHaveBeenCalledWith('world');
    // expect(value).toBe('world!');
    // const stub = jest.fn();
    // stub();
    // expect(stub).toBeCalled();
    it('spyOn .toBeCalled()', () => {
        const somethingSpy = jest.spyOn(greetWorld, 'greetingFn');
        greetWorld.greetingFn();
        expect(somethingSpy).toBeCalled();
      });
  });