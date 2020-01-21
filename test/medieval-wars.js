import { describe, it } from 'mocha';
import { expect } from 'chai';
import { initMap, advanceMobs, isLoseConditionMet } from '../src/services/medieval-wars';

describe('Medieval Wars', () => {
  describe('initMap', () => {
    it('should return an empty array', () => {
      const expected = [
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null]
      ];

      const result = initMap();

      expect(result).to.deep.equal(expected);
    });
  });

  describe('advanceMobs', () => {
    it('should move mobs further', () => {
      const initialState = [
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'mob_warrior', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null]
      ];
      const expected = [
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'mob_warrior', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null]
      ];

      const result = advanceMobs(initialState);

      expect(result).to.deep.equal(expected);
    });
  });

  describe('isLoseConditionMet', () => {
    it('should return true when there are mobs in the last row', () => {
      const mapState = [
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'mob_warrior', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null]
      ];
      const expected = true;

      const result = isLoseConditionMet(mapState);

      expect(result).to.equal(expected);
    });

    it('should return false when there are no mobs in the last row', () => {
      const mapState = [
        [null, 'mob_warrior', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, 'mob_warrior', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null],
        [null, 'player', null, null, null, null, null, null, null, null, null]
      ];
      const expected = false;

      const result = isLoseConditionMet(mapState);

      expect(result).to.equal(expected);
    });
  });
});
