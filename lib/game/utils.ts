import { FateTier, FateValue } from './types';

const tiers: FateTier[] = [1, 1, 1, 2, 2, 2, 3];

export const getFateTier = (value: FateValue): FateTier => tiers[value - 1];
