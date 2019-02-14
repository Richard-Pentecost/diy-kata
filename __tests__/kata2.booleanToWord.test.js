const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns Yes when passed the boolean value true', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });
  it('returns No when passed the boolean value false', () => {
    expect(booleanToWord(false)).toBe('No');
  });  
});
