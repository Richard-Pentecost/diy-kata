//Clear and concise testing, Well done.
const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns an array with human years, cat years and dog years in it', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
});
