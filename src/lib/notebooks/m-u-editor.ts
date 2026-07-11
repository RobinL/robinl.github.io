import * as Inputs from '@observablehq/inputs';
import * as d3 from 'd3';
import embed from 'vega-embed';

export type ComparisonColumn = {
  col_name: string;
  m_probabilities: number[];
  u_probabilities: number[];
  num_levels?: number;
};

export type SplinkSettings = {
  proportion_of_matches: number;
  comparison_columns: ComparisonColumn[];
  level_names?: string[];
};

type EditorValue = {
  lam: number;
  m_u: Array<Record<string, number | string>>;
};

export function normalise(values: number[]): number[] {
  const total = d3.sum(values);
  return values.map((value) => value / total);
}

export function generateStartingSettings(numLevels: number): SplinkSettings {
  return {
    proportion_of_matches: 0.3,
    comparison_columns: [{
      col_name: ' ',
      m_probabilities: normalise(d3.range(1, numLevels + 1).map((value) => value ** 2)),
      u_probabilities: normalise(d3.range(numLevels, 0, -1).map((value) => value ** 2)),
    }],
  };
}

function toEditorValue(settings: SplinkSettings): EditorValue {
  const column = settings.comparison_columns[0];
  return {
    lam: settings.proportion_of_matches,
    m_u: [
      Object.assign({match_status: 'non-match', match_index: 0}, Object.fromEntries(column.u_probabilities.map((p, i) => [`level_${i}`, p]))),
      Object.assign({match_status: 'match', match_index: 1}, Object.fromEntries(column.m_probabilities.map((p, i) => [`level_${i}`, p]))),
    ],
  };
}

export function editorValueToSettings(value: EditorValue): SplinkSettings {
  const levelKeys = Object.keys(value.m_u[0]).filter((key) => key.startsWith('level_'));
  return {
    proportion_of_matches: value.lam,
    comparison_columns: [{
      col_name: ' ',
      m_probabilities: levelKeys.map((key) => Number(value.m_u[1][key])),
      u_probabilities: levelKeys.map((key) => Number(value.m_u[0][key])),
      num_levels: levelKeys.length,
    }],
  };
}

function nonlinearScale(compression: number, size: number, reverse = false) {
  if (compression === 0) {
    return d3.scaleLinear().domain([0, 1]).range(reverse ? [size, 0] : [0, size]);
  }
  let squash = compression;
  let transform: (x: number) => number;
  if (squash >= 0) transform = (x) => 5 ** x / (5 ** x + 1);
  else {
    transform = (x) => -Math.log((x + 8.01) / (8.01 - x));
    squash = -((-squash) ** (1 / 3)) * (8 / (8 ** (1 / 3)));
  }
  const offset = d3.scaleLinear().domain([0, 1]).range([-squash, squash]);
  const raw = d3.range(51).map((i) => transform(offset(i / 50)));
  const extent = d3.extent(raw) as [number, number];
  const normaliseScale = d3.scaleLinear().domain(extent).range([0, 1]);
  const domain = raw.map(normaliseScale);
  const range = d3.range(51).map((i) => size * (reverse ? (50 - i) / 50 : i / 50));
  return d3.scaleLinear().domain(domain).range(range);
}

export function createMuEditor(settings: SplinkSettings, requestedWidth: number, height: number, compressionStart = 0): HTMLElement {
  const value = toEditorValue(structuredClone(settings));
  const wrapper = document.createElement('div') as unknown as HTMLElement & {value: EditorValue};
  wrapper.className = 'mu-editor';
  wrapper.value = value;
  const width = requestedWidth;
  const margin = {top: 80, right: 60, bottom: 60, left: 60};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const axisSlider = Inputs.range([-8, 8], {step: 0.1, label: 'Axis compression', value: compressionStart});
  wrapper.append(axisSlider);
  const svg = d3.select(wrapper).append('svg').attr('width', width).attr('height', height);
  const plot = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const levelCount = settings.comparison_columns[0].m_probabilities.length;
  const levelKeys = d3.range(levelCount).map((i) => `level_${i}`);
  const levelNames = settings.level_names ?? levelKeys;
  const colourRange = levelCount === 2
    ? [d3.schemeGnBu[3][0], d3.schemeGnBu[3][2]]
    : d3.schemeGnBu[levelCount];
  const colours = d3.scaleOrdinal<string, string>().domain(levelKeys).range(colourRange);
  let x = nonlinearScale(axisSlider.value, innerWidth);
  let y = nonlinearScale(axisSlider.value, innerHeight, true);

  plot.append('text').attr('x', innerWidth / 2).attr('y', -60).attr('text-anchor', 'middle').attr('font-weight', 'bold').text('Distribution of m and u values');
  plot.append('text').attr('x', innerWidth / 2).attr('y', -40).attr('text-anchor', 'middle').attr('font-size', '0.8em').text('The area represents all record comparisons, split into levels by match status');
  plot.append('text').attr('x', innerWidth / 2).attr('y', -20).attr('text-anchor', 'middle').attr('font-size', '0.8em').attr('fill', 'red').text('✨ Drag within rectangles to change values ✨');
  const xAxis = plot.append('g').attr('transform', `translate(0,${innerHeight})`);
  const yAxis = plot.append('g');
  const layers = plot.selectAll<SVGGElement, string>('g.level').data(levelKeys).join('g').attr('class', 'level').attr('fill', colours);

  function render() {
    x = nonlinearScale(axisSlider.value, innerWidth);
    y = nonlinearScale(axisSlider.value, innerHeight, true);
    const stack = d3.stack<Record<string, number | string>>().keys(levelKeys)(value.m_u);
    const lamBoundary = 1 - value.lam;
    const barX = (matchIndex: number) => matchIndex === 0 ? x(0) : x(lamBoundary);
    const barWidth = (matchIndex: number) => matchIndex === 0 ? x(lamBoundary) - x(0) : x(1) - x(lamBoundary);
    layers.each(function (_key, levelIndex) {
      const layer = stack[levelIndex];
      const group = d3.select(this);
      group.selectAll<SVGRectElement, d3.SeriesPoint<Record<string, number | string>>>('rect').data(layer).join('rect')
        .attr('stroke', 'white').attr('stroke-width', 2)
        .attr('x', (_d, matchIndex) => barX(matchIndex)).attr('width', (_d, matchIndex) => barWidth(matchIndex))
        .attr('y', (d) => y(d[1])).attr('height', (d) => y(d[0]) - y(d[1]))
        .style('cursor', 'ns-resize')
        .call(d3.drag<SVGRectElement, d3.SeriesPoint<Record<string, number | string>>>().on('drag', (event, datum) => {
          value.lam = Math.max(0, Math.min(1, x.invert(x(value.lam) - event.dx)));
          const matchIndex = layer.indexOf(datum);
          const midpoint = (y(datum[0]) + y(datum[1])) / 2;
          let target = event.y < midpoint ? levelIndex + 1 : levelIndex - 1;
          if (levelIndex === 0) target = 1;
          if (levelIndex === levelCount - 1) target = levelCount - 2;
          const draggingFromBottom = target < levelIndex;
          const boundary = draggingFromBottom ? datum[0] : datum[1];
          let change = y.invert(y(boundary) + event.dy) - boundary;
          if (!draggingFromBottom) change = -change;
          const currentKey = levelKeys[levelIndex];
          const targetKey = levelKeys[target];
          const current = Number(value.m_u[matchIndex][currentKey]) - change;
          const adjacent = Number(value.m_u[matchIndex][targetKey]) + change;
          if (current >= 0 && current <= 1 && adjacent >= 0 && adjacent <= 1) {
            value.m_u[matchIndex][currentKey] = current;
            value.m_u[matchIndex][targetKey] = adjacent;
            render();
            wrapper.dispatchEvent(new Event('input', {bubbles: true}));
          }
        }));
      group.selectAll<SVGTextElement, d3.SeriesPoint<Record<string, number | string>>>('text').data(layer).join('text')
        .attr('x', (_d, matchIndex) => barX(matchIndex) + barWidth(matchIndex) / 2).attr('y', (d) => (y(d[0]) + y(d[1])) / 2)
        .attr('text-anchor', 'middle').attr('dy', '0.5em').attr('font-size', '0.8em').attr('fill', 'black').attr('pointer-events', 'none')
        .text((d, matchIndex) => {
          const label = levelNames[levelIndex].replace('_', ' ');
          const capitalised = label.charAt(0).toUpperCase() + label.slice(1);
          return `${capitalised}: ${d3.format('.2%')(Number(value.m_u[matchIndex][levelKeys[levelIndex]]))} of ${matchIndex ? 'matches' : 'non-matches'}`;
        });
    });
    const tickValues = getTickValues(axisSlider.value);
    const bottomAxis = d3.axisBottom(x).tickFormat((value) => value.toString());
    const leftAxis = d3.axisLeft(y).tickFormat((value) => value.toString());
    if (tickValues) {
      bottomAxis.tickValues(tickValues);
      leftAxis.tickValues(tickValues);
    }
    xAxis.call(bottomAxis);
    yAxis.call(leftAxis);
    plot.selectAll('text.match-status').data([
      {text: 'Record comparisons which are non-matches', from: 0, to: lamBoundary},
      {text: 'Record comparisons which are matches', from: lamBoundary, to: 1},
    ]).join('text').attr('class', 'match-status').attr('x', (d) => (x(d.from) + x(d.to)) / 2).attr('y', innerHeight + 40).attr('text-anchor', 'middle').attr('font-size', '0.8em').text((d) => d.text);
  }
  axisSlider.addEventListener('input', render);
  render();
  return wrapper;
}

function getTickValues(compression: number): number[] | null {
  if (compression <= 2.5) return null;
  const values = [1e-10, 1e-9, 1e-8, 1e-7, 1e-6, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1, 0.5, 0.9, 0.99, 0.999, 0.9999, 0.99999, 0.999999, 0.9999999, 0.99999999, 0.999999999, 0.9999999999];
  const offset = Math.floor(compression * 0.65);
  const middle = values.indexOf(0.5);
  return [0, ...values.slice(middle - offset, middle + offset + 1), 1];
}

export function createBayesFactorChart(settings: SplinkSettings, width: number): HTMLElement {
  const values = settings.comparison_columns.flatMap((column) => column.m_probabilities.map((m, index) => ({
    m_probability: m,
    u_probability: column.u_probabilities[index],
    bayes_factor: m / column.u_probabilities[index],
    column_name: column.col_name,
    log2_bayes_factor: Math.log2(m / column.u_probabilities[index]),
    gamma_index: index,
    gamma_column_name: `gamma_${column.col_name}`,
    level_name: `level_${index}`,
    max_gamma_index: column.m_probabilities.length - 1,
    num_levels: column.m_probabilities.length,
  })));
  const spec = {
    config: {
      view: {width: width / 1.5, height: 300},
      mark: {tooltip: null},
      title: {anchor: 'middle'},
      header: {title: null},
    },
    data: {values},
    mark: {type: 'bar', clip: true},
    selection: {selector076: {type: 'interval', bind: 'scales', encodings: ['x']}},
    encoding: {
      color: {type: 'quantitative', field: 'log2_bayes_factor', scale: {range: ['red', 'orange', 'green'], domain: [-10, 0, 10]}},
      row: {type: 'nominal', field: 'column_name', sort: {field: 'gamma_index'}, header: {labelAngle: 0, labelAnchor: 'middle', labelAlign: 'left'}},
      tooltip: [
        {type: 'nominal', field: 'column_name'},
        {type: 'ordinal', field: 'level_name'},
        {type: 'quantitative', field: 'm_probability', format: '.4f'},
        {type: 'quantitative', field: 'bayes_factor', format: '.4f'},
        {type: 'nominal', field: 'level_proportion', title: 'Percentage of record comparisons in this level', format: '.2%'},
        {type: 'quantitative', field: 'log2_bayes_factor', title: 'log2(Bayes factor, K = m/u)', format: '.4f'},
      ],
      x: {type: 'quantitative', axis: {title: 'log2(Bayes factor, K = m/u)', values: [-10, -5, 0, 5, 10]}, field: 'log2_bayes_factor', scale: {domain: [-10, 10]}},
      y: {type: 'nominal', field: 'level_name', axis: {title: null}},
    },
    height: 50,
    resolve: {scale: {y: 'independent'}},
    title: {text: 'Influence of comparison vector values on match probability', subtitle: `Estimated proportion of matches λ = ${settings.proportion_of_matches.toPrecision(4)}`},
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  } as const;
  const container = document.createElement('div');
  void embed(container, spec as never, {actions: false});
  return container;
}
