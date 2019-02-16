//Good test, very well written but again we want to test the other roles within the array also to be certain it works as expected with different values.
//We wouldn't normally test everything within our code but we also wouldn't also test one aspect and presumed it worked as intended.
//Good test coverage is important.
const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {
  
  const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, {
    name: 'Jenny',
    role: 'Sales Associate'
  }, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
  }];

  it('returns the employee\'s role in the company', () => {
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
  });
});
