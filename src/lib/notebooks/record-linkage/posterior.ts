import embed from 'vega-embed';
import * as Inputs from '@observablehq/inputs';
import movementSpec from '../../../content/posts/m_and_u_probabilities/bf_movement_spec.json';
import {
  bayesFactorFromMatchWeight,
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

type InputElement<T> = HTMLElement & { value: T };

export type EvidenceControlPair = {
  matchWeight: InputElement<number>;
  bayesFactor: InputElement<number>;
};

export function createPriorControl(): InputElement<number> {
  return Inputs.range([0, 1], {
    label: 'Prior probability',
    value: 0.25,
    step: 0.01,
  }) as InputElement<number>;
}

export function createEvidenceControlPair(): EvidenceControlPair {
  const bayesFactor = Inputs.number([2 ** -10, 2 ** 10], { label: 'Bayes Factor', value: 2 }) as InputElement<number>;
  bayesFactor.value = 64;
  const matchWeight = Inputs.range([-10, 10], { label: 'Equivalent partial match weight', value: 2 }) as InputElement<number>;
  matchWeight.value = 6;
  let syncing = false;
  bayesFactor.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    matchWeight.value = matchWeightFromBayesFactor(bayesFactor.value);
    matchWeight.dispatchEvent(new Event('input', { bubbles: true }));
    syncing = false;
  });
  matchWeight.addEventListener('input', () => {
    if (syncing) return;
    syncing = true;
    bayesFactor.value = roundToSignificantFigures(bayesFactorFromMatchWeight(matchWeight.value), 8);
    bayesFactor.dispatchEvent(new Event('input', { bubbles: true }));
    syncing = false;
  });
  return { bayesFactor, matchWeight };
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
  await embed(root, spec, { actions: false });
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
