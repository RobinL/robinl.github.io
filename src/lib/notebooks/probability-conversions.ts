import * as d3 from 'd3';

export const bayesFactorFromWeight = (weight: number) => 2 ** weight;
export const probabilityFromWeight = (weight: number) => 2 ** weight / (1 + 2 ** weight);
export const weightFromBayesFactor = (factor: number) => Math.log2(factor);
export const bayesFactorFromProbability = (probability: number) => probability / (1 - probability);

export function roundSignificant(value: number, digits = 4): number {
  if (value === 0) return 0;
  const scale = 10 ** (digits - Math.floor(Math.log10(Math.abs(value))) - 1);
  return Math.round(value * scale) / scale;
}

type ChartElement = HTMLDivElement & {value: number};

export function createConversionChart(maxWeight: number, requestedWidth: number): ChartElement {
  const container = document.createElement('div') as ChartElement;
  container.className = 'probability-conversion-chart'; container.value = 0;
  const width = Math.max(460, Math.min(requestedWidth, 1000)); const height = 310;
  const margin = {left: 95, right: 25, top: 42, bottom: 38}; const plotWidth = width - margin.left - margin.right;
  const svg = d3.select(container).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('width', '100%');
  const defs = svg.append('defs'); const gradient = defs.append('linearGradient').attr('id', 'weight-gradient');
  gradient.append('stop').attr('offset', '0%').attr('stop-color', 'red'); gradient.append('stop').attr('offset', '50%').attr('stop-color', '#bbb'); gradient.append('stop').attr('offset', '100%').attr('stop-color', 'green');
  svg.append('text').attr('x', width / 2).attr('y', 20).attr('text-anchor', 'middle').attr('font-weight', 'bold').text('Correspondence between probability, match weight, and Bayes factor');
  const x = d3.scaleLinear().domain([-maxWeight, maxWeight]).range([margin.left, width - margin.right]);
  const rows = [
    {name: 'Partial Match Weight', value: (w: number) => roundSignificant(w), ticks: [-maxWeight, 0, maxWeight]},
    {name: 'Bayes Factor (odds)', value: (w: number) => roundSignificant(bayesFactorFromWeight(w)), ticks: [-maxWeight, 0, maxWeight]},
    {name: 'Probability (50% prior)', value: (w: number) => probabilityFromWeight(w).toFixed(4), ticks: [-maxWeight, 0, maxWeight]},
    {name: 'Intuitive interpretation', value: (w: number) => w === 0 ? 'no more or less likely' : `${roundSignificant(w > 0 ? bayesFactorFromWeight(w) : 1 / bayesFactorFromWeight(w))}× ${w > 0 ? 'more' : 'less'} likely`, ticks: [-maxWeight, 0, maxWeight]},
  ];
  const labels: d3.Selection<SVGTextElement, unknown, null, undefined>[] = [];
  rows.forEach((row, index) => {
    const y = margin.top + index * 57;
    svg.append('rect').attr('x', margin.left).attr('y', y).attr('width', plotWidth).attr('height', 30).attr('fill', 'url(#weight-gradient)').attr('opacity', .55);
    svg.append('text').attr('x', margin.left - 8).attr('y', y + 19).attr('text-anchor', 'end').attr('font-size', 12).text(row.name);
    const label = svg.append('text').attr('x', x(0)).attr('y', y + 20).attr('text-anchor', 'middle').attr('font-weight', 'bold').text(String(row.value(0))); labels.push(label);
    svg.append('line').attr('class', `cursor-${index}`).attr('x1', x(0)).attr('x2', x(0)).attr('y1', y).attr('y2', y + 30).attr('stroke', '#8b0000');
  });
  const overlay = svg.append('rect').attr('x', margin.left).attr('y', margin.top).attr('width', plotWidth).attr('height', 4 * 57 - 27).attr('fill', 'transparent').style('cursor', 'crosshair');
  overlay.on('pointermove', (event) => {
    const [, pointerY] = d3.pointer(event, svg.node()); void pointerY;
    const weight = Math.max(-maxWeight, Math.min(maxWeight, x.invert(d3.pointer(event, svg.node())[0])));
    container.value = weight;
    labels.forEach((label, i) => label.attr('x', x(weight)).text(String(rows[i].value(weight))));
    rows.forEach((_row, i) => svg.select(`line.cursor-${i}`).attr('x1', x(weight)).attr('x2', x(weight)));
    container.dispatchEvent(new Event('input', {bubbles: true}));
  });
  return container;
}

export function conversionText(weight: number, direction: 'weight' | 'probability'): HTMLElement {
  const p = probabilityFromWeight(weight); const factor = bayesFactorFromWeight(weight); const element = document.createElement('div');
  element.className = 'conversion-formulas';
  element.innerHTML = direction === 'weight'
    ? `<p>Partial Match Weight = ω = ${roundSignificant(weight)}</p><p>Bayes Factor = K = 2<sup>ω</sup> = ${roundSignificant(factor)}</p><p>Probability = p = K / (1 + K) = ${p.toFixed(4)}</p>`
    : `<p>Probability = p = ${p.toFixed(4)}</p><p>Bayes Factor = K = p / (1 − p) = ${roundSignificant(factor)}</p><p>Partial Match Weight = ω = log₂ K = ${roundSignificant(weight)}</p>`;
  return element;
}
