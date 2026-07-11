import * as d3 from 'd3';
import type {ComparisonColumn, TreemapDatum, VisualisationSettings} from './types';

// The legacy Observable cells populated an ordinal scale in dependency-evaluation order:
// non-match received category blue first, then match received category orange. Keep the
// resulting semantic palette explicit and deterministic here.
export const matchColor = d3.rgb(d3.schemeCategory10[1]).brighter(2.5).formatHex();
export const nonMatchColor = d3.rgb(d3.schemeCategory10[0]).brighter(1.5).formatHex();

export function generateTreemapData(settings: VisualisationSettings): TreemapDatum {
  const prior = settings.proportion_of_matches;
  const root: TreemapDatum = {
    name: 'All comparisons',
    name_list: [],
    prob_list: [],
    prob: 1,
    colour: '#ffffff',
    children: [
      {name: 'matches', name_list: ['match'], prob_list: [prior], prob: prior, value: prior, colour: matchColor},
      {name: 'non-match', name_list: ['non-match'], prob_list: [1 - prior], prob: 1 - prior, value: 1 - prior, colour: nonMatchColor},
    ],
  };

  const [matches, nonMatches] = root.children!;
  for (const column of settings.comparison_columns) {
    expandLeaves(matches, column, true);
    expandLeaves(nonMatches, column, false);
  }
  return root;
}

function expandLeaves(node: TreemapDatum, column: ComparisonColumn, match: boolean): void {
  if (node.children) {
    node.children.forEach((child) => expandLeaves(child, column, match));
  } else {
    const probabilities = match ? column.m_probabilities : column.u_probabilities;
    const activeColor = match ? matchColor : nonMatchColor;
    node.children = probabilities.map((probability, index) => {
      const name = `gamma_${column.col_name} = ${index}`;
      return {
        name,
        name_list: [...node.name_list, name],
        prob_list: [...node.prob_list, probability],
        prob: probability,
        value: (node.value ?? 0) * probability,
        colour: column.gamma_value === index && node.colour === activeColor ? activeColor : '#ffffff',
      };
    });
  }
  delete node.value;
}

export function renderTreemap(
  settings: VisualisationSettings,
  maxDepth: number,
  height: number,
  width: number,
  document: Document = globalThis.document,
): HTMLDivElement {
  const chartWidth = Math.max(320, width);
  const hierarchy = d3.hierarchy(generateTreemapData(settings))
    .sum((datum) => datum.value ?? 0)
    .sort((left, right) => (right.value ?? 0) - (left.value ?? 0));
  const root = d3.treemap<TreemapDatum>()
    .tile(d3.treemapSquarify)
    .size([chartWidth, height])
    .paddingOuter(5)
    .paddingTop(5)
    .paddingInner(5)
    .round(true)(hierarchy);

  const container = document.createElement('div');
  container.className = 'fs-treemap-container';
  const tooltip = document.createElement('div');
  tooltip.className = 'fs-treemap-tooltip';
  container.append(tooltip);
  const svg = d3.select(container).append('svg')
    .attr('height', height)
    .attr('width', chartWidth)
    .attr('role', 'img')
    .attr('aria-label', `Fellegi-Sunter comparison-space treemap after ${maxDepth} columns`);

  const nodes = root.descendants().filter((node) => node.depth <= maxDepth + 1);
  const group = svg.selectAll('g').data(nodes).join('g')
    .attr('transform', (node) => `translate(${node.x0},${node.y0})`);
  group.append('rect')
    .attr('width', (node) => node.x1 - node.x0)
    .attr('height', (node) => node.y1 - node.y0)
    .attr('stroke-width', 1)
    .attr('stroke', 'black')
    .attr('fill', (node) => fillForNode(node, maxDepth));

  group.append('foreignObject')
    .attr('pointer-events', 'none')
    .attr('width', (node) => node.x1 - node.x0)
    .attr('height', (node) => node.y1 - node.y0)
    .append('xhtml:div')
    .attr('class', 'fs-treemap-info')
    .html((node) => node.depth === maxDepth + 1 ? nodeDescription(node.data) : '');

  group.on('mouseenter', (_, node) => {
    const description = node.depth === maxDepth + 1 ? nodeDescription(node.data) : '';
    tooltip.innerHTML = description;
    tooltip.style.visibility = description ? 'visible' : 'hidden';
  }).on('mousemove', (event) => {
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    tooltip.style.left = chartWidth - event.layerX > tooltipWidth
      ? `${event.offsetX + 10}px`
      : `${event.offsetX - tooltipWidth - 10}px`;
    tooltip.style.top = `${event.offsetY + 10}px`;
  }).on('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
  });

  return container;
}

function fillForNode(node: d3.HierarchyRectangularNode<TreemapDatum>, maxDepth: number): string {
  const color = d3.rgb(node.data.colour);
  if (node.depth === maxDepth + 1) return color.formatRgb();
  if (node.data.colour !== '#ffffff') color.opacity = node.depth === 1 ? 0.3 : 0;
  return color.formatRgb();
}

function nodeDescription(data: TreemapDatum): string {
  const entries = data.name_list.map((name, index) => `${escapeHtml(name)} (${d3.format('.1%')(data.prob_list[index])})`);
  const finalProbability = data.prob_list.reduce((product, value) => product * value, 1);
  return `<p>${entries.join(' and ')}</p><p>Proportion of all comparisons: ${d3.format('.1%')(finalProbability)}</p>`;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]!));
}
