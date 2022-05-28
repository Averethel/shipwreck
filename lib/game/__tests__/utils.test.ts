import { getFateTier } from '../utils';
import { FateTier, FateValue } from '../types';

describe('getFateTier', () => {
  const fateTiers: Map<FateValue, FateTier> = new Map<FateValue, FateTier>([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 3],
  ]);

  fateTiers.forEach((tier, value) => {
    it(`returns ${tier} for value ${value}`, () => {
      expect(getFateTier(value)).toBe(tier);
    });
  });
});
