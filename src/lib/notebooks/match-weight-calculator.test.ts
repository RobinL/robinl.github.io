import { describe, expect, it } from 'vitest';
import { JSDOM } from 'jsdom';
import {
  calculateMatchWeight,
  renderMatchWeightCalculation,
} from './match-weight-calculator';

describe('calculateMatchWeight', () => {
  it('converts a match weight to equivalent values', () => {
    const result = calculateMatchWeight(5.1, 'Match Weight');

    expect(result.matchWeight).toBe(5.1);
    expect(result.bayesFactor).toBeCloseTo(34.29675, 5);
    expect(result.probability).toBeCloseTo(0.971668, 5);
    expect(result.relativeInterpretation).toBe('34.30 times more likely');
  });

  it('handles probability and reciprocal Bayes factor inputs', () => {
    expect(calculateMatchWeight(0.5, 'Probability (e.g., 0.5 for 50%)')).toMatchObject({
      matchWeight: 0,
      bayesFactor: 1,
      relativeInterpretation: 'no more or less likely',
    });

    expect(calculateMatchWeight(4, 'Reciprocal Bayes Factor')).toMatchObject({
      matchWeight: -2,
      probability: 0.2,
      bayesFactor: 0.25,
      relativeInterpretation: '4.00 times less likely',
    });
  });

  it('renders the calculation using semantic HTML', () => {
    const document = new JSDOM().window.document;
    const result = calculateMatchWeight(1, 'Bayes Factor');
    const rendered = renderMatchWeightCalculation(result, document);

    expect(rendered.querySelectorAll('p')).toHaveLength(5);
    expect(rendered.textContent).toContain('Match Weight: 0.00');
    expect(rendered.textContent).toContain('One error in each 2 predictions');
  });
});
