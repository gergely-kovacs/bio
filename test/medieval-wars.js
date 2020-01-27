import { describe, it } from 'mocha';
import { expect } from 'chai';
import { advanceMobs, isLoseConditionMet } from '../src/services/medieval-wars';

describe('Medieval Wars', () => {
  describe('advanceMobs', () => {
    it('should move mobs further', () => {
      const initialState = [{
        type: 'mob_warrior',
        position: {
          x: 0,
          y: 1
        }
      }, {
        type: 'mob_warrior',
        position: {
          x: 250,
          y: 251
        }
      }, {
        type: 'player',
        position: {
          x: 160,
          y: 320
        }
      }];
      const expected = [{
        type: 'mob_warrior',
        position: {
          x: 0,
          y: 2
        }
      }, {
        type: 'mob_warrior',
        position: {
          x: 250,
          y: 252
        }
      }, {
        type: 'player',
        position: {
          x: 160,
          y: 320
        }
      }];

      const result = advanceMobs(initialState);

      expect(result).to.deep.equal(expected);
    });
  });

  describe('isLoseConditionMet', () => {
    it('should return true when there are mobs in the last row', () => {
      const mapState = [{
        type: 'mob_warrior',
        position: {
          x: 0,
          y: 1
        }
      }, {
        type: 'mob_warrior',
        position: {
          x: 250,
          y: 320
        }
      }, {
        type: 'player',
        position: {
          x: 160,
          y: 320
        }
      }];
      const expected = true;

      const result = isLoseConditionMet(mapState);

      expect(result).to.equal(expected);
    });

    it('should return false when there are no mobs in the last row', () => {
      const mapState = [{
        type: 'mob_warrior',
        position: {
          x: 0,
          y: 1
        }
      }, {
        type: 'mob_warrior',
        position: {
          x: 250,
          y: 251
        }
      }, {
        type: 'player',
        position: {
          x: 160,
          y: 320
        }
      }];
      const expected = false;

      const result = isLoseConditionMet(mapState);

      expect(result).to.equal(expected);
    });
  });
});
