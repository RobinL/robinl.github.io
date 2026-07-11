import embed from 'vega-embed';
import katex from 'katex';
import originalSpec from './probability-conversions-spec.json';

export const bayesFactorFromWeight = (weight: number) => 2 ** weight;
export const probabilityFromWeight = (weight: number) => 2 ** weight / (1 + 2 ** weight);
export const weightFromBayesFactor = (factor: number) => Math.log2(factor);
export const bayesFactorFromProbability = (probability: number) => probability / (1 - probability);

export function roundSignificant(value: number, digits = 4): number {
  if (value === 0) return 0;
  const scale = 10 ** (digits - Math.floor(Math.log10(Math.abs(value))) - 1);
  return Math.round(value * scale) / scale;
}

type ChartDatum = {
  prob: number;
  bf: number;
  mw: number;
  prob_fmt: string;
  bf_fmt: string;
  mw_fmt: string;
  int_fmt: string;
};

type ConversionSpec = {
  vconcat: Array<{width?: number}>;
  datasets: {mydata: ChartDatum[]};
};

type ChartElement = HTMLDivElement & {value: number};

function formatBayesFactor(bf: number, matchWeight: number): string {
  if (bf >= 1000) return bf.toLocaleString(undefined, {maximumFractionDigits: 0});
  if (bf >= 100) return bf.toLocaleString(undefined, {maximumFractionDigits: 1});
  if (bf >= 10) return bf.toLocaleString(undefined, {maximumFractionDigits: 2});
  if (bf >= 1) return bf.toLocaleString(undefined, {maximumFractionDigits: 3}).replace(/\.?0+$/, '');
  const minimumFractionDigits = 4 + Math.floor(Math.abs(matchWeight) / 5);
  return bf.toLocaleString(undefined, {minimumFractionDigits}).replace(/\.?0+$/, '');
}

export function conversionChartData(maxWeight: number): ChartDatum[] {
  const subdivisions = 5;
  return Array.from({length: maxWeight * 2 * subdivisions + 1}, (_, index) => {
    const sourceWeight = (index - maxWeight * subdivisions) / subdivisions;
    const prob = probabilityFromWeight(sourceWeight);
    const bf = bayesFactorFromProbability(prob);
    const mw = Math.round(weightFromBayesFactor(bf) * 1e8) / 1e8;
    const minimumFractionDigits = 4 + Math.floor(Math.abs(mw) / 5);
    const prob_fmt = prob.toLocaleString(undefined, {minimumFractionDigits}).replace(/\.?0+$/, '');
    const bf_fmt = formatBayesFactor(bf, mw);
    const mw_fmt = mw.toLocaleString(undefined, {maximumFractionDigits: 1});
    let int_fmt = 'no more or less likely';
    if (prob !== 0.5) {
      const factor = prob > 0.5 ? bf : 1 / bf;
      const formatted = factor > 100
        ? factor.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
        : factor.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2}).replace(/\.?0+$/, '');
      int_fmt = `${formatted}x ${prob > 0.5 ? 'more' : 'less'} likely`;
    }
    return {prob, bf, mw, prob_fmt, bf_fmt, mw_fmt, int_fmt};
  });
}

export function getOriginalConversionSpec(maxWeight: number, width: number): ConversionSpec {
  const spec = structuredClone(originalSpec) as unknown as ConversionSpec;
  spec.vconcat.forEach((view) => {
    if (Object.prototype.hasOwnProperty.call(view, 'width')) view.width = width - 190;
  });
  spec.datasets.mydata = conversionChartData(maxWeight);
  return spec;
}

export function createConversionChart(maxWeight: number, width: number): ChartElement {
  const container = document.createElement('div') as ChartElement;
  container.className = 'probability-conversion-chart';
  container.value = 0;
  void embed(container, getOriginalConversionSpec(maxWeight, width) as never, {actions: false}).then(({view}) => {
    const update = (_name: string, signal: {mw?: number[]}) => {
      container.value = signal.mw?.[0] ?? 0;
      container.dispatchEvent(new Event('input', {bubbles: true}));
    };
    view.addSignalListener('param_7', update);
    update('param_7', view.signal('param_7') as {mw?: number[]});
  });
  return container;
}

export type ConversionFormula = 'mw_1' | 'bf_1' | 'p_1' | 'p_2' | 'bf_2' | 'mw_2';

export function renderConversionFormula(weight: number, formula: ConversionFormula, document: Document = globalThis.document): HTMLElement {
  const probability = probabilityFromWeight(weight);
  const factor = bayesFactorFromWeight(weight);
  const element = document.createElement('div');
  const roundedWeight = roundSignificant(weight);
  const roundedFactor = roundSignificant(factor);
  const roundedProbability = probability.toFixed(4);
  const expressions: Record<ConversionFormula, string> = {
    mw_1: `\\text{Partial Match Weight} = \\omega = ${roundedWeight}`,
    bf_1: `\\text{Bayes Factor} = K = 2^{\\omega} = 2^{{${roundedWeight}}} = ${roundedFactor}`,
    p_1: `\\text{Probability} = p = \\frac{K}{1 + K} = \\frac{2^{{${roundedWeight}}}}{1 + 2^{{${roundedWeight}}}} = ${roundedProbability}`,
    p_2: `\\text{Probability} = p = ${roundedProbability}`,
    bf_2: `\\text{Bayes Factor} = K = \\frac{p}{1-p} = \\frac{${roundedProbability}}{1 - ${roundedProbability}} = ${roundedFactor}`,
    mw_2: `\\text{Partial Match Weight} = \\omega = \\log_{2} K = \\log_{2} {${roundedFactor}} = ${roundSignificant(weightFromBayesFactor(factor))}`,
  };
  katex.render(expressions[formula], element, {throwOnError: false});
  return element.removeChild(element.firstElementChild!) as HTMLElement;
}
