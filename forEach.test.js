const forEach = require('./forEach');

describe('forEach([1, 2, 3], callback)', () => {
  const mockCallback = jest.fn();
  forEach([1, 2, 3], mockCallback);

  it('forEach() should call the callback', () => {
    expect(mockCallback).toHaveBeenCalled();
  });

  it('forEach() should call the callback three times', () => {
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  it('forEach() should call the callback with correct argument', () => {
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });
});

describe('forEach([], callback)', () => {
  const mockCallback = jest.fn();
  forEach([], mockCallback);

  it('forEach() should NOT call the callback', () => {
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
