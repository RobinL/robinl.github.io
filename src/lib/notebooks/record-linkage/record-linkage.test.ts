import { JSDOM } from 'jsdom';
import { describe, expect, it, vi } from 'vitest';
import {
  exactMatchComparison,
  jaroWinklerComparison,
  levenshteinComparison,
  tutorialComparisonFunctions,
} from './comparisons';
import { computeLinkageTutorial } from './computing';
import {
  bayesFactorFromMatchWeight,
  matchWeightFromProbability,
  probabilityFromMatchWeight,
} from './conversions';
import {
  applyComparisonFunctions,
  createComparisonRows,
  settingsTable,
  settingsToWaterfall,
} from './model';
import {
  createPriorControl,
  createEvidenceControlPair,
  posteriorCalculation,
  posteriorChartSpec,
} from './posterior';
import { tutorialSettings } from './settings';
import {
  createEditableRecordTable,
  renderComparisonVectorTable,
  renderDataTable,
  renderEstimatedProbability,
  renderSettingsTable,
} from './ui';

describe('record-linkage scoring', () => {
  it('preserves the published comparison levels', () => {
    expect(jaroWinklerComparison('robin', 'robin')).toBe(2);
    expect(jaroWinklerComparison('robin', 'robyn')).toBe(1);
    expect(jaroWinklerComparison('robin', 'alice')).toBe(0);
    expect(levenshteinComparison('w1a 1aa', 'w1a 1ab')).toBe(1);
    expect(exactMatchComparison('male', 'female')).toBe(0);
    expect(exactMatchComparison(null, 'female')).toBe(-1);
  });

  it('scores the tutorial pair and produces a final probability', () => {
    const rows = [
      { uid: 1, first_name: 'robin', surname: 'linacre', postcode: 'w1a 1aa', gender: 'female' },
      { uid: 2, first_name: 'robyn', surname: 'linacre', postcode: 'w1a 1aa', gender: 'male' },
    ];
    const vector = applyComparisonFunctions(createComparisonRows(rows), tutorialComparisonFunctions)[0];
    expect(vector).toMatchObject({ γ_first_name: 1, γ_surname: 2, γ_postcode: 2, γ_gender: 0 });

    const waterfall = settingsToWaterfall(tutorialSettings, vector);
    expect(waterfall.map((row) => row.column_name)).toEqual([
      'Prior', 'first_name', 'surname', 'postcode', 'gender', 'Final score',
    ]);
    expect(probabilityFromMatchWeight(waterfall.at(-1)!.log2_bayes_factor)).toBeGreaterThan(0.9);
  });

  it('creates every cross-dataset comparison in the computing tutorial', () => {
    const left = [
      { uid: 1, first_name: 'a', surname: 'a', postcode: 'a', gender: 'male' },
      { uid: 2, first_name: 'b', surname: 'b', postcode: 'b', gender: 'female' },
      { uid: 3, first_name: 'c', surname: 'c', postcode: 'c', gender: 'female' },
    ];
    const right = [
      { uid: 1, first_name: 'a', surname: 'a', postcode: 'a', gender: 'male' },
      { uid: 2, first_name: 'b', surname: 'b', postcode: 'b', gender: 'female' },
    ];
    const calculation = computeLinkageTutorial(left, right);
    expect(calculation.comparisonPairs).toHaveLength(6);
    expect(calculation.vectorValues).toHaveLength(6);
    expect(calculation.finalScores[0]).toHaveProperty('match_probability');
    expect(Object.keys(calculation.vectors[0]).slice(0, 6)).toEqual([
      'first_name_l', 'first_name_r', 'γ_first_name', 'surname_l', 'surname_r', 'γ_surname',
    ]);
    expect(Object.keys(calculation.weights[0])).not.toContain('γ_first_name');
    expect(Object.keys(calculation.weights[0])).toContain('ω_prior');
  });
});

describe('record-linkage UI and conversions', () => {
  it('keeps the probability, odds and match-weight conversions consistent', () => {
    const matchWeight = matchWeightFromProbability(0.2);
    expect(probabilityFromMatchWeight(matchWeight)).toBeCloseTo(0.2);
    expect(bayesFactorFromMatchWeight(matchWeight)).toBeCloseTo(0.25);
    expect(posteriorCalculation({ priorProbability: 0.2, partialMatchWeight: 2, bayesFactor: 4 }).posteriorProbability).toBeCloseTo(0.5);
  });

  it('keeps the Observable posterior controls reactive', () => {
    const window = new JSDOM().window;
    vi.stubGlobal('document', window.document);
    vi.stubGlobal('Node', window.Node);
    vi.stubGlobal('NodeList', window.NodeList);
    vi.stubGlobal('HTMLCollection', window.HTMLCollection);
    vi.stubGlobal('Event', window.Event);

    try {
      const priorControl = createPriorControl();
      const probabilitySlider = priorControl.querySelector<HTMLInputElement>('input[type="range"]')!;
      probabilitySlider.valueAsNumber = 0.5;
      probabilitySlider.dispatchEvent(new window.Event('input', { bubbles: true }));
      expect(priorControl.value).toBe(0.5);

      const evidencePair = createEvidenceControlPair();
      expect(evidencePair.bayesFactor.value).toBe(64);
      expect(evidencePair.matchWeight.value).toBe(6);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it('updates the named Vega dataset that drives the posterior bars', () => {
    const spec = posteriorChartSpec({
      priorProbability: 0.5,
      partialMatchWeight: 2,
      bayesFactor: 4,
    });
    const data = spec.datasets[spec.data.name];

    expect(data).toHaveLength(1);
    expect(data[0]).toMatchObject({
      prior_match_weight: 0,
      posterior_match_weight: 2,
      prior_prob_fmt: '0.50',
      posterior_prob_fmt: '0.80',
    });
  });

  it('parses edits from the local editable table', () => {
    const window = new JSDOM().window;
    const table = createEditableRecordTable([
      { first_name: 'Robin', surname: 'Linacre', postcode: 'W1A 1AA', gender: 'male' },
      { first_name: 'Robyn', surname: 'Linacre', postcode: 'W1A 1AA', gender: 'female' },
    ], false, window.document);
    table.rows[1].cells[0].textContent = 'Alice';
    table.dispatchEvent(new window.Event('input'));
    expect(table.value[0]).toMatchObject({ uid: 1, first_name: 'alice', gender: 'male' });
  });

  it('renders the estimated probability without executable HTML', () => {
    const document = new JSDOM().window.document;
    const element = renderEstimatedProbability([{ log2_bayes_factor: 1 } as never], document);
    expect(element.textContent).toContain('66.7%');
    expect(element.querySelector('mark')).not.toBeNull();
  });

  it('renders comparison settings with the published labels and a tinted prior row', () => {
    const document = new JSDOM().window.document;
    const rows = settingsTable(tutorialSettings);
    const table = renderSettingsTable(rows, document);

    expect(Array.from(table.rows[0].cells).map((cell) => cell.textContent)).toEqual([
      'Comparison', 'Comparison Level', 'Comparison Vector Value (γ)', 'm probability',
      'u probability', 'Bayes Factor', 'Partial Match Weight (ω)',
    ]);
    expect(table.rows[1].cells[0].textContent).toBe('Prior');
    expect(table.rows[1].cells[0].style.backgroundColor).toBe('rgba(31, 119, 180, 0.35)');
    expect(table.rows[1].cells[1].style.backgroundColor).toBe('rgba(31, 119, 180, 0.1)');
  });

  it('renders gamma values with their colour-coded partial match weights', () => {
    const document = new JSDOM().window.document;
    const table = renderComparisonVectorTable([{
      'γ_first_name': 1,
      'ω_first_name': 5.605,
    }], document);

    expect(table.rows[1].cells[0].textContent).toBe('γ = 1 (ω_first_name = 5.6)');
    expect(table.querySelector('.comparison-vector-weight')?.getAttribute('style')).toContain('color');
  });

  it('uses the final-score turquoise for final weight and probability columns', () => {
    const document = new JSDOM().window.document;
    const table = renderDataTable([{
      'ω_final_match_weight': 4.2,
      match_probability: 0.95,
    }], { tintColumns: true }, document);

    expect(table.rows[0].cells[0].style.backgroundColor).toBe('rgba(23, 190, 207, 0.35)');
    expect(table.rows[0].cells[1].style.backgroundColor).toBe('rgba(23, 190, 207, 0.35)');
    expect(table.rows[1].cells[0].style.backgroundColor).toBe('rgba(23, 190, 207, 0.1)');
    expect(table.rows[1].cells[1].style.backgroundColor).toBe('rgba(23, 190, 207, 0.1)');
  });
});
