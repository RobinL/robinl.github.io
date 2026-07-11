import {JSDOM} from 'jsdom';
import {describe, expect, it, vi} from 'vitest';
import {
  exactMatchComparison,
  jaroWinklerComparison,
  levenshteinComparison,
  tutorialComparisonFunctions,
} from './comparisons';
import {computeLinkageTutorial} from './computing';
import {
  bayesFactorFromMatchWeight,
  matchWeightFromProbability,
  probabilityFromMatchWeight,
} from './conversions';
import {
  applyComparisonFunctions,
  createComparisonRows,
  settingsToWaterfall,
} from './model';
import {
  createEvidenceControls,
  createPriorControls,
  posteriorCalculation,
  posteriorChartSpec,
} from './posterior';
import {tutorialSettings} from './settings';
import {createEditableRecordTable, renderEstimatedProbability} from './ui';

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
      {uid: 1, first_name: 'robin', surname: 'linacre', postcode: 'w1a 1aa', gender: 'female'},
      {uid: 2, first_name: 'robyn', surname: 'linacre', postcode: 'w1a 1aa', gender: 'male'},
    ];
    const vector = applyComparisonFunctions(createComparisonRows(rows), tutorialComparisonFunctions)[0];
    expect(vector).toMatchObject({γ_first_name: 1, γ_surname: 2, γ_postcode: 2, γ_gender: 0});

    const waterfall = settingsToWaterfall(tutorialSettings, vector);
    expect(waterfall.map((row) => row.column_name)).toEqual([
      'Prior', 'first_name', 'surname', 'postcode', 'gender', 'Final score',
    ]);
    expect(probabilityFromMatchWeight(waterfall.at(-1)!.log2_bayes_factor)).toBeGreaterThan(0.9);
  });

  it('creates every cross-dataset comparison in the computing tutorial', () => {
    const left = [
      {uid: 1, first_name: 'a', surname: 'a', postcode: 'a', gender: 'male'},
      {uid: 2, first_name: 'b', surname: 'b', postcode: 'b', gender: 'female'},
      {uid: 3, first_name: 'c', surname: 'c', postcode: 'c', gender: 'female'},
    ];
    const right = [
      {uid: 1, first_name: 'a', surname: 'a', postcode: 'a', gender: 'male'},
      {uid: 2, first_name: 'b', surname: 'b', postcode: 'b', gender: 'female'},
    ];
    const calculation = computeLinkageTutorial(left, right);
    expect(calculation.comparisonPairs).toHaveLength(6);
    expect(calculation.vectorValues).toHaveLength(6);
    expect(calculation.finalScores[0]).toHaveProperty('match_probability');
  });
});

describe('record-linkage UI and conversions', () => {
  it('keeps the probability, odds and match-weight conversions consistent', () => {
    const matchWeight = matchWeightFromProbability(0.2);
    expect(probabilityFromMatchWeight(matchWeight)).toBeCloseTo(0.2);
    expect(bayesFactorFromMatchWeight(matchWeight)).toBeCloseTo(0.25);
    expect(posteriorCalculation({priorProbability: 0.2, partialMatchWeight: 2, bayesFactor: 4}).posteriorProbability).toBeCloseTo(0.5);
  });

  it('keeps the Observable posterior controls synchronized and reactive', () => {
    const window = new JSDOM().window;
    vi.stubGlobal('document', window.document);
    vi.stubGlobal('Node', window.Node);
    vi.stubGlobal('NodeList', window.NodeList);
    vi.stubGlobal('HTMLCollection', window.HTMLCollection);

    try {
      const prior = createPriorControls();
      const probabilitySlider = prior.querySelector<HTMLInputElement>('input[type="range"]')!;
      probabilitySlider.valueAsNumber = 0.5;
      probabilitySlider.dispatchEvent(new window.Event('input', {bubbles: true}));
      expect(prior.value).toMatchObject({priorProbability: 0.5, priorOdds: 1});

      const evidence = createEvidenceControls();
      const matchWeightSlider = evidence.querySelector<HTMLInputElement>('input[type="range"]')!;
      matchWeightSlider.valueAsNumber = 3;
      matchWeightSlider.dispatchEvent(new window.Event('input', {bubbles: true}));
      expect(evidence.value).toMatchObject({partialMatchWeight: 3, bayesFactor: 8});
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
      {first_name: 'Robin', surname: 'Linacre', postcode: 'W1A 1AA', gender: 'male'},
      {first_name: 'Robyn', surname: 'Linacre', postcode: 'W1A 1AA', gender: 'female'},
    ], false, window.document);
    table.rows[1].cells[0].textContent = 'Alice';
    table.dispatchEvent(new window.Event('input'));
    expect(table.value[0]).toMatchObject({uid: 1, first_name: 'alice', gender: 'male'});
  });

  it('renders the estimated probability without executable HTML', () => {
    const document = new JSDOM().window.document;
    const element = renderEstimatedProbability([{log2_bayes_factor: 1} as never], document);
    expect(element.textContent).toContain('66.7%');
    expect(element.querySelector('mark')).not.toBeNull();
  });
});
