import {JSDOM} from 'jsdom';
import {describe, expect, it, vi} from 'vitest';
import {exampleRow, matchProbability} from './calculations';
import {createComparisonControl} from './controls';
import {createSettings, initialColumns, initialPrior} from './settings';
import {generateTreemapData, matchColor, nonMatchColor} from './treemap';

describe('Fellegi-Sunter visualisation', () => {
  it('calculates the posterior from the selected comparison levels', () => {
    const settings = createSettings(initialPrior, initialColumns);
    const expectedMatchMass = 0.3 * 0.7 * 0.2 * 0.8 * 0.7;
    const expectedNonMatchMass = 0.7 * 0.25 * 0.85 * 0.2 * 0.1;
    expect(matchProbability(settings)).toBeCloseTo(
      expectedMatchMass / (expectedMatchMass + expectedNonMatchMass),
    );
    expect(exampleRow(settings, 2)).toMatchObject({
      fname_l: 'John',
      fname_r: 'John',
      sname_l: 'Smith',
      sname_r: 'Hanks',
    });
  });

  it('preserves all probability mass in the generated treemap', () => {
    const tree = generateTreemapData(createSettings(initialPrior, initialColumns));
    const leaves = collectLeafValues(tree);
    expect(leaves).toHaveLength(32);
    expect(leaves.reduce((sum, value) => sum + value, 0)).toBeCloseTo(1);
  });

  it('preserves the original Observable yellow and blue palette', () => {
    expect(matchColor).toBe('#ffff22');
    expect(nonMatchColor).toBe('#35cbff');
  });

  it('keeps paired m and u controls complementary', () => {
    const window = new JSDOM().window;
    vi.stubGlobal('document', window.document);
    vi.stubGlobal('Node', window.Node);
    vi.stubGlobal('NodeList', window.NodeList);
    vi.stubGlobal('HTMLCollection', window.HTMLCollection);
    try {
      const control = createComparisonControl(initialColumns[0]);
      const sliders = control.querySelectorAll<HTMLInputElement>('input[type="range"]');
      sliders[0].valueAsNumber = 0.4;
      sliders[0].dispatchEvent(new window.Event('input', {bubbles: true}));
      expect(control.value.u_probabilities).toEqual([0.4, 0.6]);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});

function collectLeafValues(node: ReturnType<typeof generateTreemapData>): number[] {
  if (!node.children) return [node.value ?? 0];
  return node.children.flatMap(collectLeafValues);
}
