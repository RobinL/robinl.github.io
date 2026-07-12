import * as turf from '@turf/turf';
import * as d3 from 'd3';
import {feature} from 'topojson-client';
import ukTopology from '../../notebooks/assets/solar-country/uk-topo.json';

type ValueForm = HTMLFormElement & {value: number; input: HTMLInputElement; output: HTMLOutputElement};

export function createSolarPercentageSlider(document: Document = globalThis.document): ValueForm {
  const form = document.createElement('form') as ValueForm;
  const title = document.createElement('div');
  title.style.cssText = 'font: 700 0.9rem sans-serif;';
  title.textContent = 'Choose percentage to fill with solar panels';
  const input = document.createElement('input');
  input.name = 'input'; input.type = 'range'; input.min = '0'; input.max = '1'; input.step = '0.0025'; input.value = '0.5';
  const output = document.createElement('output');
  output.name = 'output'; output.style.cssText = 'font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;';
  Object.defineProperties(form, {input: {value: input}, output: {value: output}});
  const update = () => {
    form.value = Math.round(input.valueAsNumber * 100) / 100;
    output.value = d3.format('.1p')(form.value);
  };
  input.addEventListener('input', update);
  form.addEventListener('submit', (event) => event.preventDefault());
  form.append(title, input, output);
  update();
  return form;
}

const uk = feature(ukTopology as never, (ukTopology as any).objects.uk) as any;
const height = 600;
const width = height * 0.5373256204432791;
const projection = d3.geoAlbers().rotate([4.4, 0]).parallels([50, 60])
  .fitExtent([[20, 0], [width, height]], {type: 'FeatureCollection', features: uk.features});

const table = (() => {
  const extent = turf.bbox(uk as never);
  const minLatitude = extent[1]; const maxLatitude = extent[3];
  return d3.range(minLatitude, maxLatitude + 0.3, 0.3).map((latitude) => {
    const area = turf.area(uk as never);
    const areaSquareMiles = turf.convertArea(area, 'meters', 'miles');
    const bottom = turf.bboxClip(uk.features[0], [-20, 50, 10, latitude]);
    let bottomSquareMiles = turf.convertArea(turf.area(bottom), 'meters', 'miles');
    if (latitude >= maxLatitude) bottomSquareMiles = areaSquareMiles;
    return {proportion: bottomSquareMiles / areaSquareMiles, latitude, pixel: projection([0, latitude])![1]};
  });
})();

const percentageToPixel = d3.scaleLinear(table.map((row) => row.proportion), table.map((row) => row.pixel));
const percentageToLatitude = d3.scaleLinear(table.map((row) => row.proportion), table.map((row) => row.latitude));

export function renderSolarMap(percentage: number, document: Document = globalThis.document): SVGSVGElement {
  const svg = d3.select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
    .style('width', `${width}px`).style('height', `${height}px`).attr('width', width).attr('height', height);
  svg.append('g').call((axis) => axis.call(d3.axisRight(percentageToPixel).tickSize(width).tickFormat(d3.format('.0p')))
    .call((group) => group.select('.domain').remove())
    .call((group) => group.selectAll('.tick line').attr('stroke-opacity', 0.2))
    .call((group) => group.selectAll('.tick text').attr('x', 4).attr('dy', -4)));
  const path = d3.geoPath(projection);
  svg.selectAll('.outline').data(uk.features).enter().append('path')
    .attr('class', (datum: any) => `subunit ${datum.id}`).attr('stroke', 'black').attr('fill', 'none').attr('stroke-width', 1).attr('d', path as never);
  const clipped = turf.bboxClip(uk.features[0], [-20, 50, 10, percentageToLatitude(percentage)]);
  svg.selectAll('.sliced').data([clipped]).enter().append('path')
    .attr('class', (datum: any) => `subunit ${datum.id}`).attr('fill', 'green').attr('d', path as never);
  return svg.node()!;
}

export function renderSolarOutput(percentage: number, document: Document = globalThis.document): HTMLParagraphElement {
  const total = 242.495e9 * (20 / 1000) * 24;
  const perPerson = total * percentage / 66e6;
  const paragraph = document.createElement('p');
  paragraph.append(`If we covered this much of the UK with solar panels, we'd generate about ${d3.format(',.0f')(perPerson)} kWh a day per person. See `);
  const link = document.createElement('a'); link.href = '/country_energy_usage/'; link.textContent = 'here';
  paragraph.append(link, ' for daily energy usage by country');
  return paragraph;
}
