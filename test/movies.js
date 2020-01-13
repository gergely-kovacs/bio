import { generateQueryUrls } from '../src/services/movies';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Movies', () => {
  describe('generateQueryUrls', () => {
    it('should generate the correct URLs', () => {
      const expected = [
        'https://www.omdbapi.com/?t=The+Sunset+Limited&y=2011&apikey=6416b521',
        'https://www.omdbapi.com/?t=K-PAX&y=2001&apikey=6416b521',
        'https://www.omdbapi.com/?t=American Beauty&y=1999&apikey=6416b521',
        'https://www.omdbapi.com/?t=Seven Pounds&y=2008&apikey=6416b521',
        'https://www.omdbapi.com/?t=Tangerines&y=2013&apikey=6416b521'
      ];

      const result = generateQueryUrls();

      expect(result).to.deep.equal(expected);
    });
  });
});
