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

export function createMuEditor(settings: SplinkSettings, requestedWidth: number, height: number, compression = 0): HTMLElement {
  const value = toEditorValue(structuredClone(settings));
  const wrapper = document.createElement('div') as unknown as HTMLElement & {value: EditorValue};
  wrapper.className = 'mu-editor';
  wrapper.value = value;
  const width = Math.max(560, Math.min(requestedWidth, 1050));
  const margin = {top: 80, right: 60, bottom: 60, left: 60};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const svg = d3.select(wrapper).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('width', '100%');
  const plot = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const levelCount = settings.comparison_columns[0].m_probabilities.length;
  const levelKeys = d3.range(levelCount).map((i) => `level_${i}`);
  const levelNames = settings.level_names ?? levelKeys;
  const colours = d3.scaleOrdinal<string, string>().domain(levelKeys).range(d3.schemeGnBu[Math.max(3, levelCount)].slice(-levelCount));
  const x = nonlinearScale(compression, innerWidth);
  const y = nonlinearScale(compression, innerHeight, true);

  plot.append('text').attr('x', innerWidth / 2).attr('y', -60).attr('text-anchor', 'middle').attr('font-weight', 'bold').text('Distribution of m and u values');
  plot.append('text').attr('x', innerWidth / 2).attr('y', -40).attr('text-anchor', 'middle').attr('font-size', '0.8em').text('The area represents all record comparisons, split into levels by match status');
  plot.append('text').attr('x', innerWidth / 2).attr('y', -20).attr('text-anchor', 'middle').attr('font-size', '0.8em').attr('fill', 'red').text('✨ Drag within rectangles to change values ✨');
  const xAxis = plot.append('g').attr('transform', `translate(0,${innerHeight})`);
  const yAxis = plot.append('g');
  const layers = plot.selectAll<SVGGElement, string>('g.level').data(levelKeys).join('g').attr('class', 'level').attr('fill', colours);

  function render() {
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
          const matchIndex = layer.indexOf(datum);
          const midpoint = (y(datum[0]) + y(datum[1])) / 2;
          let target = event.y < midpoint ? levelIndex + 1 : levelIndex - 1;
          if (levelIndex === 0) target = 1;
          if (levelIndex === levelCount - 1) target = levelCount - 2;
          const boundary = event.y < midpoint && levelIndex !== levelCount - 1 ? datum[1] : datum[0];
          let change = y.invert(y(boundary) + event.dy) - boundary;
          if (target > levelIndex) change = -change;
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
        .text((d, matchIndex) => `${levelNames[levelIndex].replace('_', ' ')}: ${d3.format('.2%')(Number(value.m_u[matchIndex][levelKeys[levelIndex]]))} of ${matchIndex ? 'matches' : 'non-matches'}`);
    });
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));
    plot.selectAll('text.match-status').data([
      {text: 'Record comparisons which are non-matches', from: 0, to: lamBoundary},
      {text: 'Record comparisons which are matches', from: lamBoundary, to: 1},
    ]).join('text').attr('class', 'match-status').attr('x', (d) => (x(d.from) + x(d.to)) / 2).attr('y', innerHeight + 40).attr('text-anchor', 'middle').attr('font-size', '0.8em').text((d) => d.text);
  }
  render();
  return wrapper;
}

export function createBayesFactorChart(settings: SplinkSettings, width: number): HTMLElement {
  const values = settings.comparison_columns.flatMap((column) => column.m_probabilities.map((m, index) => ({
    m_probability: m, u_probability: column.u_probabilities[index], bayes_factor: m / column.u_probabilities[index],
    log2_bayes_factor: Math.log2(m / column.u_probabilities[index]), column_name: column.col_name,
    gamma_index: index, level_name: `level_${index}`,
  })));
  const spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json', width: Math.min(width / 1.5, 700), height: 50,
    config: {view: {continuousHeight: 300}, title: {anchor: 'middle'}, header: {title: null}}, data: {values},
    mark: {type: 'bar', clip: true}, params: [{name: 'zoom', select: {type: 'interval', encodings: ['x']}, bind: 'scales'}],
    encoding: {
      color: {type: 'quantitative', field: 'log2_bayes_factor', scale: {range: ['red', 'orange', 'green'], domain: [-10, 0, 10]}},
      row: {type: 'nominal', field: 'column_name', sort: {field: 'gamma_index'}, header: {labelAngle: 0, labelAnchor: 'middle', labelAlign: 'left'}},
      x: {type: 'quantitative', field: 'log2_bayes_factor', scale: {domain: [-10, 10]}, axis: {title: 'log2(Bayes factor, K = m/u)', values: [-10, -5, 0, 5, 10]}},
      y: {type: 'nominal', field: 'level_name', axis: {title: null}},
      tooltip: [{field: 'column_name'}, {field: 'level_name'}, {field: 'm_probability', format: '.4f'}, {field: 'u_probability', format: '.4f'}, {field: 'bayes_factor', format: '.4f'}, {field: 'log2_bayes_factor', format: '.4f'}],
    },
    title: {text: 'Influence of comparison vector values on match probability', subtitle: `Estimated proportion of matches λ = ${settings.proportion_of_matches.toPrecision(4)}`},
  } as const;
  const container = document.createElement('div');
  void embed(container, spec as never, {actions: false});
  return container;
}
