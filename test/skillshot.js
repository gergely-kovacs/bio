import { describe, it } from 'mocha';
import { expect } from 'chai';
import { advanceMobs, isLoseConditionMet } from '../src/services/skillshot';

describe('Skillshot', () => {
  describe('advanceMobs', () => {
    it('should move mobs further', () => {
      const delta = 16.67;
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
          y: 2.6670000000000003
        }
      }, {
        type: 'mob_warrior',
        position: {
          x: 250,
          y: 252.667
        }
      }, {
        type: 'player',
        position: {
          x: 160,
          y: 320
        }
      }];

      const result = advanceMobs(initialState, delta);

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
