const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Sib', (err, desc) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(err, null);
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns an error message when invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Sibbb', (err, desc) => {
      assert.exists(err);
      done();
    });

  });
});