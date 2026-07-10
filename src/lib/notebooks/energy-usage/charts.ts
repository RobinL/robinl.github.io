import { format, hierarchy, scaleOrdinal, schemeCategory10, treemap, treemapBinary } from 'd3';
import type { EnergyDatum } from './calculations';
import { totalEnergy } from './calculations';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const GRID_SIZE = 20;
const SQUARE_SIZE = 16;
const MAX_WIDTH = 640;
const COLOR_DOMAIN = [
  'Driving',
  'Flying',
  'Heating',
  'Stuff',
  'Showers',
  'Food/Eating',
  'Washing machine',
  'Dishwasher',
  'Dogs',
];

type SquareDatum = EnergyDatum & { fraction: number };
type TreeDatum = EnergyDatum & { children?: TreeDatum[] };

let clipId = 0;

function svgElement<K extends keyof SVGElementTagNameMap>(
  document: Document,
  name: K
): SVGElementTagNameMap[K] {
  return document.createElementNS(SVG_NAMESPACE, name);
}

function setAttributes(element: Element, attributes: Record<string, string | number>): void {
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, String(value));
}

function chartWidth(width: number): number {
  return Math.max(120, Math.min(width, MAX_WIDTH));
}

function colorScale() {
  return scaleOrdinal<string, string>(schemeCategory10).domain(COLOR_DOMAIN);
}

function squaresForData(data: EnergyDatum[]): SquareDatum[] {
  return [...data]
    .sort((a, b) => b.value - a.value)
    .flatMap((datum) => {
      const value = Math.max(0, datum.value);
      return Array.from({ length: Math.ceil(value) }, (_, index) => ({
        ...datum,
        fraction: Math.min(1, value - index),
      }));
    });
}

function appendSquare(
  document: Document,
  group: SVGGElement,
  square: SquareDatum,
  index: number,
  columns: number,
  colors: ReturnType<typeof colorScale>
): void {
  const x = (index % columns) * GRID_SIZE;
  const y = Math.floor(index / columns) * GRID_SIZE;
  const fill = svgElement(document, 'rect');
  setAttributes(fill, {
    x,
    y,
    width: square.fraction * SQUARE_SIZE,
    height: SQUARE_SIZE,
    fill: colors(square.name),
  });
  group.append(fill);

  const grid = svgElement(document, 'rect');
  setAttributes(grid, {
    x,
    y,
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    fill: 'none',
    stroke: 'gray',
    'stroke-width': 0.5,
  });
  group.append(grid);
}

export function renderUnitChart(
  data: EnergyDatum[],
  width: number,
  document: Document = globalThis.document
): SVGSVGElement {
  const svgWidth = chartWidth(width);
  const visibleWidth = svgWidth - 20;
  const columns = Math.max(1, Math.floor(visibleWidth / GRID_SIZE));
  const squares = squaresForData(data);
  const squareRows = Math.max(1, Math.ceil(squares.length / columns));
  const remainingColumns = columns - (squares.length % columns);
  const textNeedsOwnRow = remainingColumns < 7;
  const svgHeight = (squareRows + (textNeedsOwnRow ? 1 : 0)) * GRID_SIZE;
  const svg = svgElement(document, 'svg');
  setAttributes(svg, { width: svgWidth, height: svgHeight, viewBox: `0 0 ${svgWidth} ${svgHeight}` });

  const group = svgElement(document, 'g');
  svg.append(group);
  const colors = colorScale();
  squares.forEach((square, index) => appendSquare(document, group, square, index, columns, colors));

  const text = svgElement(document, 'text');
  const textIndex = squares.length;
  const textX = textNeedsOwnRow ? 0 : (textIndex % columns) * GRID_SIZE + 2;
  const textY = textNeedsOwnRow
    ? squareRows * GRID_SIZE + GRID_SIZE / 2
    : Math.floor(textIndex / columns) * GRID_SIZE + GRID_SIZE / 2;
  setAttributes(text, {
    x: textX,
    y: textY,
    'dominant-baseline': 'middle',
    'font-size': '1em',
  });
  text.textContent = `${totalEnergy(data).toFixed(1)} kwh/day`;
  group.append(text);

  return svg;
}

export function renderBreakdownChart(
  data: EnergyDatum[],
  width: number,
  document: Document = globalThis.document
): SVGSVGElement {
  const svgWidth = chartWidth(width);
  const leftMargin = 100;
  const rightMargin = 20;
  const visibleWidth = svgWidth - leftMargin - rightMargin;
  const columns = Math.max(1, Math.floor(visibleWidth / GRID_SIZE));
  const categories = [...data].filter((datum) => datum.value > 0).sort((a, b) => b.value - a.value);
  const placements: Array<{ datum: EnergyDatum; squares: SquareDatum[]; row: number; rows: number }> = [];
  let row = 0;

  for (const datum of categories) {
    const squares = squaresForData([datum]);
    const rows = Math.max(1, Math.ceil(squares.length / columns));
    placements.push({ datum, squares, row, rows });
    row += rows + 0.5;
  }

  const svgHeight = Math.max(GRID_SIZE, Math.ceil(row * GRID_SIZE));
  const svg = svgElement(document, 'svg');
  setAttributes(svg, { width: svgWidth, height: svgHeight, viewBox: `0 0 ${svgWidth} ${svgHeight}` });
  const group = svgElement(document, 'g');
  group.setAttribute('transform', `translate(${leftMargin},0)`);
  svg.append(group);
  const colors = colorScale();

  for (const placement of placements) {
    const categoryGroup = svgElement(document, 'g');
    categoryGroup.setAttribute('transform', `translate(0,${placement.row * GRID_SIZE})`);
    placement.squares.forEach((square, index) =>
      appendSquare(document, categoryGroup, square, index, columns, colors)
    );

    const label = svgElement(document, 'text');
    setAttributes(label, {
      x: -6,
      y: (placement.rows * GRID_SIZE) / 2,
      'text-anchor': 'end',
      'dominant-baseline': 'middle',
      'font-size': placement.datum.name.length <= 10 ? '1rem' : `${10 / placement.datum.name.length}rem`,
    });
    label.textContent = placement.datum.name;
    categoryGroup.append(label);
    group.append(categoryGroup);
  }

  return svg;
}

export function renderSummaryText(
  data: EnergyDatum[],
  document: Document = globalThis.document
): HTMLParagraphElement {
  const total = totalEnergy(data);
  const watts = (total / 24) * 1_000;
  const numberFormat = format(',.3r');
  const paragraph = document.createElement('p');
  paragraph.append('You use a total of ');
  const strong = document.createElement('strong');
  strong.textContent = `${numberFormat(total)} kilowatt hours`;
  paragraph.append(
    strong,
    ` of energy a day from the activities covered on this webpage. This means your average power consumption is ${numberFormat(watts)} watts.`
  );
  return paragraph;
}

export function renderTreemap(
  data: EnergyDatum[],
  width: number,
  document: Document = globalThis.document
): SVGSVGElement {
  const values = data.filter((datum) => datum.value > 0);
  const svgWidth = chartWidth(width);
  const total = totalEnergy(values);
  const svgHeight = Math.max(80, (22 * 22 * total) / svgWidth);
  const rootDatum: TreeDatum = { name: 'root', value: 0, children: values };
  const hierarchyRoot = hierarchy(rootDatum)
    .sum((datum) => datum.value)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  const root = treemap<TreeDatum>()
    .tile(treemapBinary)
    .size([svgWidth, svgHeight])
    .padding(1)
    .round(true)(hierarchyRoot);

  const svg = svgElement(document, 'svg');
  setAttributes(svg, {
    width: svgWidth,
    height: svgHeight,
    viewBox: `0 0 ${svgWidth} ${svgHeight}`,
  });
  svg.style.font = '10px sans-serif';
  const definitions = svgElement(document, 'defs');
  svg.append(definitions);
  const colors = colorScale();
  const valueFormat = format(',.3r');
  const percentFormat = format(',.1%');

  for (const leaf of root.leaves()) {
    const group = svgElement(document, 'g');
    group.setAttribute('transform', `translate(${leaf.x0},${leaf.y0})`);
    const title = svgElement(document, 'title');
    title.textContent = `${leaf.data.name}\n${valueFormat(leaf.value ?? 0)}`;
    group.append(title);

    const rectangle = svgElement(document, 'rect');
    const id = `energy-treemap-${++clipId}`;
    setAttributes(rectangle, {
      id,
      width: leaf.x1 - leaf.x0,
      height: leaf.y1 - leaf.y0,
      fill: colors(leaf.data.name),
      'fill-opacity': 0.7,
    });
    group.append(rectangle);

    const clipPath = svgElement(document, 'clipPath');
    clipPath.setAttribute('id', `${id}-clip`);
    const use = svgElement(document, 'use');
    use.setAttribute('href', `#${id}`);
    clipPath.append(use);
    definitions.append(clipPath);

    const text = svgElement(document, 'text');
    text.setAttribute('clip-path', `url(#${id}-clip)`);
    const lines = leaf.data.name
      .split(/(?=[A-Z][^A-Z])/g)
      .concat(`${valueFormat(leaf.value ?? 0)} kwh`, percentFormat((leaf.value ?? 0) / total));
    lines.forEach((line, index) => {
      const span = svgElement(document, 'tspan');
      span.setAttribute('x', '3');
      span.setAttribute('y', `${1.1 + index * 0.9}em`);
      if (index === lines.length - 1) span.setAttribute('fill-opacity', '0.7');
      span.textContent = line;
      text.append(span);
    });
    group.append(text);
    svg.append(group);
  }

  return svg;
}
