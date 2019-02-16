//The test works fine and looks good but it's generally a good idea to have a couple of runs with different numbers to ensure there aren't any unforseen issues.
//See below.
const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.');
    //expect(reachDestination(80,120)).toBe(`I should be there in about 1 hour`);
    //expect(reachDestination(69,7)).toBe(`I should be there in about 10 hour`)
  });
});
