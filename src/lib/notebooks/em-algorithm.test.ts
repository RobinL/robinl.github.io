import {describe, expect, it} from 'vitest';
import {computeEmState, data_left_template, data_right_template, match_pairs_template} from './em-algorithm';

const parameters = {lambda: 0.3, pi1_1_m1: 0.9, pi1_1_m0: 0.1, pi2_1_m1: 0.8, pi2_05_m1: 0.15, pi2_1_m0: 0.05, pi2_05_m0: 0.1};

describe('interactive EM model', () => {
  it('cross-joins the inputs and computes bounded posterior probabilities', () => {
    const state = computeEmState(data_left_template, data_right_template, match_pairs_template, parameters);
    expect(state.combinations).toHaveLength(6);
    expect(state.trueLambda).toBeCloseTo(2 / 6);
    expect(state.estimates.every((row) => Number(row.estimated_match_probability) >= 0 && Number(row.estimated_match_probability) <= 1)).toBe(true);
    expect(Number.isFinite(state.likelihood)).toBe(true);
  });
});
