import * as d3 from 'd3';

type NodeDatum = {name: string; colour: string; bordercolour: string; value?: number; children?: NodeDatum[]};
const matchColour = '#ffff22';
const nonMatchColour = '#35cbff';

function label(scenario: string, holds: boolean, matches: boolean) {
  const base = scenario ? (holds ? scenario : 'All other scenarios') : (holds ? 'Scenario holds' : 'Scenario does not hold');
  return `${base} (amongst ${matches ? 'matching' : 'non-matching'} entities)`;
}

function data(prior: number, m: number, u: number, scenario: string): NodeDatum {
  return {name: 'All pairwise record comparisons', colour: 'white', bordercolour: 'black', children: [
    {name: 'Entities match = λ', colour: '#d6ffe0', bordercolour: 'black', children: [
      {name: label(scenario, true, true), value: prior * m, colour: matchColour, bordercolour: 'black'},
      {name: label(scenario, false, true), value: prior * (1 - m), colour: 'white', bordercolour: 'black'},
    ]},
    {name: 'Entities do not match = (1-λ)', colour: '#ffd6d9', bordercolour: 'black', children: [
      {name: label(scenario, true, false), value: (1 - prior) * u, colour: nonMatchColour, bordercolour: 'black'},
      {name: label(scenario, false, false), value: (1 - prior) * (1 - u), colour: 'white', bordercolour: 'black'},
    ]},
  ]};
}

export function posterior(prior: number, m: number, u: number) { return prior * m / (prior * m + (1 - prior) * u); }

export function renderPosteriorTreemap(prior: number, m: number, u: number, scenario: string, width: number, stage: 1 | 2 | 3): HTMLElement {
  const actualWidth = Math.max(400, Math.min(width, 900));
  const height = 400;
  const root = d3.treemap<NodeDatum>().tile(d3.treemapResquarify).size([actualWidth, height]).paddingOuter(15).paddingTop(30).paddingInner(10).round(true)(d3.hierarchy(data(prior, m, u, scenario)).sum((d) => d.value ?? 0));
  let nodes: d3.HierarchyRectangularNode<NodeDatum>[];
  if (stage === 1) nodes = root.children ?? [];
  else if (stage === 2) nodes = root.descendants();
  else nodes = root.leaves().filter((d) => d.data.colour === matchColour || d.data.colour === nonMatchColour);
  const container = document.createElement('div'); container.className = 'treemap_container';
  const svg = d3.select(container).append('svg').attr('viewBox', `0 0 ${actualWidth} ${height}`).attr('width', '100%');
  if (stage === 3 && nodes.length === 2) {
    const firstWidth = nodes[0].x1 - nodes[0].x0; const secondWidth = nodes[1].x1 - nodes[1].x0;
    nodes[0].x0 = 20; nodes[0].x1 = 20 + firstWidth; nodes[0].y0 = 30;
    nodes[1].x0 = nodes[0].x1 + 20; nodes[1].x1 = nodes[1].x0 + secondWidth; nodes[1].y0 = 30;
  }
  const groups = svg.selectAll('g').data(nodes).join('g').attr('transform', (d) => `translate(${d.x0},${d.y0})`);
  groups.append('rect').attr('fill', (d) => d.data.colour).attr('stroke', (d) => d.data.bordercolour).attr('width', (d) => d.x1 - d.x0).attr('height', (d) => d.y1 - d.y0);
  groups.append('foreignObject').attr('width', (d) => d.x1 - d.x0).attr('height', (d) => d.y1 - d.y0).append('xhtml:div').attr('class', 'wrap-info').html((d) => `<div>${d3.format('.1%')(d.value ?? 0)} - ${d.data.name}</div>`);
  return container;
}

export function posteriorFormula(prior: number, m: number, u: number): HTMLElement {
  const element = document.createElement('p');
  element.textContent = `posterior match probability = (${prior.toFixed(2)} × ${m.toFixed(2)}) / (${prior.toFixed(2)} × ${m.toFixed(2)} + (1 − ${prior.toFixed(2)}) × ${u.toFixed(2)}) = ${posterior(prior, m, u).toFixed(2)}`;
  return element;
}
