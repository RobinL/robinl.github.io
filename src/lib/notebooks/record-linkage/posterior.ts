import embed from 'vega-embed';
import * as Inputs from '@observablehq/inputs';
import movementSpec from '../../../content/posts/m_and_u_probabilities/bf_movement_spec.json';
import {
  bayesFactorFromMatchWeight,
  bayesFactorFromProbability,
  matchWeightFromBayesFactor,
  matchWeightFromProbability,
  probabilityFromMatchWeight,
  roundToSignificantFigures,
} from './conversions';

export type PosteriorValues = {
  priorProbability: number;
  partialMatchWeight: number;
  bayesFactor: number;
};

type InputElement<T> = HTMLElement & {value: T};

export type PriorControlValues = {
  priorProbability: number;
  priorOdds: number;
};

export type EvidenceControlValues = {
  partialMatchWeight: number;
  bayesFactor: number;
};

export type PriorControlPair = {
  probability: InputElement<number>;
  odds: InputElement<number>;
};

export type EvidenceControlPair = {
  matchWeight: InputElement<number>;
  bayesFactor: InputElement<number>;
};

export function createPriorControlPair(): PriorControlPair {
  const probability = Inputs.range([0, 1], {label: 'Prior probability', value: 0.2, step: 0.01}) as InputElement<number>;
  const odds = Inputs.number([0, bayesFactorFromProbability(0.999)], {label: 'Equivalent prior odds', value: bayesFactorFromProbability(0.2)}) as InputElement<number>;
  probability.value = 0.25;
  odds.value = roundToSignificantFigures(bayesFactorFromProbability(0.25), 8);
  let syncing = false;
  probability.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    odds.value = roundToSignificantFigures(bayesFactorFromProbability(probability.value), 8);
    odds.dispatchEvent(new Event('input', {bubbles: true}));
    syncing = false;
  });
  odds.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    probability.value = odds.value / (1 + odds.value);
    probability.dispatchEvent(new Event('input', {bubbles: true}));
    syncing = false;
  });
  return {probability, odds};
}

export function createEvidenceControlPair(): EvidenceControlPair {
  const matchWeight = Inputs.range([-10, 10], {label: 'Partial match weight', value: 2}) as InputElement<number>;
  const bayesFactor = Inputs.number([2 ** -10, 2 ** 10], {label: 'Equivalent Bayes Factor', value: 2}) as InputElement<number>;
  matchWeight.value = 6;
  bayesFactor.value = 64;
  let syncing = false;
  matchWeight.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    bayesFactor.value = roundToSignificantFigures(bayesFactorFromMatchWeight(matchWeight.value), 8);
    bayesFactor.dispatchEvent(new Event('input', {bubbles: true}));
    syncing = false;
  });
  bayesFactor.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    matchWeight.value = matchWeightFromBayesFactor(bayesFactor.value);
    matchWeight.dispatchEvent(new Event('input', {bubbles: true}));
    syncing = false;
  });
  return {matchWeight, bayesFactor};
}

export function createPriorControls(): InputElement<PriorControlValues> {
  const probability = Inputs.range([0, 1], {
    label: 'Prior probability',
    value: 0.2,
    step: 0.01,
  }) as InputElement<number>;
  const odds = Inputs.number([0, bayesFactorFromProbability(0.999)], {
    label: 'Equivalent prior odds',
    value: bayesFactorFromProbability(0.2),
  }) as InputElement<number>;

  probability.addEventListener('input', () => {
    odds.value = roundToSignificantFigures(bayesFactorFromProbability(probability.value), 8);
  });
  odds.addEventListener('input', () => {
    probability.value = odds.value / (1 + odds.value);
  });

  return Inputs.form({
    priorProbability: probability,
    priorOdds: odds,
  }) as InputElement<PriorControlValues>;
}

export function createEvidenceControls(): InputElement<EvidenceControlValues> {
  const matchWeight = Inputs.range([-10, 10], {
    label: 'Partial match weight',
    value: 2,
    step: 1,
  }) as InputElement<number>;
  const bayesFactor = Inputs.number([2 ** -10, 2 ** 10], {
    label: 'Equivalent Bayes Factor',
    value: 4,
  }) as InputElement<number>;

  matchWeight.addEventListener('input', () => {
    bayesFactor.value = roundToSignificantFigures(
      bayesFactorFromMatchWeight(matchWeight.value), 8,
    );
  });
  bayesFactor.addEventListener('input', () => {
    matchWeight.value = matchWeightFromBayesFactor(bayesFactor.value);
  });

  return Inputs.form({
    partialMatchWeight: matchWeight,
    bayesFactor,
  }) as InputElement<EvidenceControlValues>;
}

export function posteriorCalculation(values: PosteriorValues) {
  const priorMatchWeight = matchWeightFromProbability(values.priorProbability);
  const posteriorMatchWeight = priorMatchWeight + values.partialMatchWeight;
  const posteriorProbability = probabilityFromMatchWeight(posteriorMatchWeight);
  return {
    ...values,
    priorMatchWeight,
    posteriorMatchWeight,
    posteriorProbability,
  };
}

export function renderPosteriorNarrative(
  values: PosteriorValues,
  document: Document = globalThis.document,
): HTMLDivElement {
  const result = posteriorCalculation(values);
  const root = document.createElement('div');
  const direction = values.bayesFactor > 1
    ? `${roundToSignificantFigures(values.bayesFactor, 4)} times more likely`
    : `${roundToSignificantFigures(1 / values.bayesFactor, 4)} times less likely`;
  const paragraphs = [
    `The partial match weight of ${roundToSignificantFigures(values.partialMatchWeight, 4)} is equivalent a Bayes Factor of ${roundToSignificantFigures(values.bayesFactor, 4)}.`,
    `This means after updating the prior, the records are ${direction} to be a match.`,
    `Our updated (posterior) belief about the probability of a match is ${roundToSignificantFigures(result.posteriorProbability, 4)}.`,
  ];
  paragraphs.forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    root.append(paragraph);
  });
  return root;
}

export async function renderPosteriorChart(
  values: PosteriorValues,
  document: Document = globalThis.document,
): Promise<HTMLDivElement> {
  const spec = posteriorChartSpec(values);
  const root = document.createElement('div');
  await embed(root, spec, {actions: false});
  return root;
}

export function posteriorChartSpec(values: PosteriorValues): any {
  const result = posteriorCalculation(values);
  const format = (value: number) => value.toFixed(2);
  const data = [{
    prior_match_weight: result.priorMatchWeight,
    posterior_match_weight: result.posteriorMatchWeight,
    prior_match_weight_fmt: format(result.priorMatchWeight),
    posterior_match_weight_fmt: format(result.posteriorMatchWeight),
    prior_bayes_factor_fmt: format(bayesFactorFromMatchWeight(result.priorMatchWeight)),
    posterior_bayes_factor_fmt: format(bayesFactorFromMatchWeight(result.posteriorMatchWeight)),
    prior_prob_fmt: format(values.priorProbability),
    posterior_prob_fmt: format(result.posteriorProbability),
    prior_text: 'prior',
    posterior_text: 'posterior',
  }];
  const spec: any = structuredClone(movementSpec);
  const datasetName = spec.data.name;
  spec.datasets[datasetName] = data;
  spec.title = `Updating a prior probability of ${format(values.priorProbability)} with a partial match weight of ${roundToSignificantFigures(values.partialMatchWeight, 3)}`;
  return spec;
}
