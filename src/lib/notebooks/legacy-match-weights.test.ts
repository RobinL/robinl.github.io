import {describe, expect, it} from 'vitest';
import {comparisonRow, defaultSplinkSettings, matchProbability, waterfallData} from './legacy-match-weights';

describe('archived match-weight article model', () => {
  it('keeps the comparison selectors wired to the waterfall and posterior', () => {
    const settings = JSON.parse(defaultSplinkSettings);
    const row = comparisonRow('Values match', 'Values match', 'Values match', 'Values do not match');
    expect(waterfallData(row, settings)).toHaveLength(5);
    expect(matchProbability(row, settings)).toBeGreaterThan(0);
    expect(matchProbability(row, settings)).toBeLessThan(1);
  });
});
