import * as d3 from 'd3-v5';
import versor from 'versor';
import {feature} from 'topojson-client';
import {convert} from '@robinl/energy_usage/src/convert.js';
import {flying} from '@robinl/energy_usage/src/flying.js';
import routesCsv from '../../notebooks/assets/my-flights/my-flights.csv?raw';
import world from '../../notebooks/assets/my-flights/world-110m.json';

const routes = d3.csvParse(routesCsv, d3.autoType).map((route) => {
  route.random = ((Math.random() - 0.5) * route.distance) / 1000;
  return route;
});
const startEndDate = d3.extent(routes, (route) => route.date);
const totalMiles = d3.sum(routes, (route) => route.distance);
const averageMiles = d3.mean(routes, (route) => route.distance);
const flightKwh = flying.flying_miles_to_kwh(totalMiles);
const tonnesCo2 = flightKwh * convert.per('kg_co2_from_jet_fuel/kwh') / 1000;
const formatDate = (date) => date.toISOString().split('T')[0];
const years = Math.abs(Math.round(((startEndDate[1] - startEndDate[0]) / 1000 / 60 / 60 / 24) / 365.25));

export function flightsTitle(document = globalThis.document) {
  const heading = document.createElement('h1'); heading.textContent = `${years} years of flights`; return heading;
}

export function flightsBlurb(document = globalThis.document) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `Between ${formatDate(startEndDate[0])} and ${formatDate(startEndDate[1])} I took ${routes.length} flights with and average distance of ${d3.format(',.0f')(averageMiles)} miles, and total milage of ${d3.format(',.0f')(totalMiles)}. Total energy usage was around ${d3.format(',.2r')(flightKwh)} kwh or ${d3.format(',.2r')(tonnesCo2)} tonnes of co2.`;
  const instruction = document.createElement('p'); instruction.textContent = 'You can drag the globe below to rotate.';
  const wrapper = document.createElement('div'); wrapper.append(paragraph, instruction); return wrapper;
}

function resample(coordinates, projection) {
  let i = 0; const n = coordinates.length; const before = []; const after = []; let c1;
  while (++i < n) {
    const c0 = coordinates[i - 1].slice(); c1 = coordinates[i].slice(); const p0 = projection(c0); const p1 = projection(c1);
    const x10 = p1[0] - p0[0]; const y10 = p1[1] - p0[1]; const d1 = x10 * x10 + y10 * y10;
    before.push(c0); after.push(c0);
    if (d1 > 4 * 0.1) {
      const c2 = d3.geoInterpolate(c0, c1)(0.5); const p2 = projection(c2); const x20 = p2[0] - p0[0]; const y20 = p2[1] - p0[1]; const dz = y10 * x20 - x10 * y20;
      if ((dz * dz) / d1 > 0.1) { const t = (x20 * x10 + y20 * y10) / d1; before.push(projection.invert(c2.resampled = [p0[0] + t * x10, p0[1] + t * y10])); after.push(c2); }
    }
  }
  if (n) { before.push(c1); after.push(c1); } return {before, after};
}

function drag(projection) {
  let v0; let q0; let r0;
  return d3.drag().on('start', function () { v0 = versor.cartesian(projection.invert(d3.mouse(this))); q0 = versor(r0 = projection.rotate()); })
    .on('drag', function () { const v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this))); projection.rotate(versor.rotation(versor.multiply(q0, versor.delta(v0, v1)))); });
}

export function renderFlightsGlobe(width, document = globalThis.document) {
  const height = width; const sphere = {type: 'Sphere'}; const land = feature(world, world.objects.land);
  const projection = d3.geoOrthographic().fitExtent([[1, 1], [width - 1, height - 1]], sphere).translate([width / 2, height / 2]).rotate([0, -51]).precision(0.1);
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height; const context = canvas.getContext('2d'); const path = d3.geoPath(projection, context);
  const colourScale = d3.scaleSequential(d3.interpolateOrRd).domain(startEndDate);
  function render() {
    context.clearRect(0, 0, width, height); context.beginPath(); path(sphere); context.fillStyle = '#fff'; context.fill();
    context.beginPath(); path(land); context.fillStyle = '#000'; context.fill(); context.beginPath(); path(sphere); context.stroke();
    routes.forEach((route) => { const sampled = resample([[route.lng_from, route.lat_from], [route.lng_to, route.lat_to]], projection); sampled.after[1] = [sampled.after[1][0] + route.random, sampled.after[1][1] + route.random]; context.lineWidth = 1; context.beginPath(); path({type: 'LineString', coordinates: sampled.after}); context.strokeStyle = colourScale(route.date); context.stroke(); });
    context.lineWidth = 1; context.strokeStyle = '#000000';
  }
  d3.select(canvas).call(drag(projection).on('drag.render', render)).call(render); return canvas;
}
