import * as d3 from 'd3-v5';
import {geoEqualEarth} from 'd3-geo-v1';
import versor from 'versor';
import {feature} from 'topojson-client';
import {convert} from '@robinl/energy_usage/src/convert.js';
import {flying} from '@robinl/energy_usage/src/flying.js';
import airportsText from '../../notebooks/assets/flight-distance/airports.dat?raw';
import world from '../../notebooks/assets/flight-distance/world-110m.json';

const airports = d3.csvParse('id,name,city,country,iata,icao,lat,lng\n' + airportsText, d3.autoType);
const airportsByIcao = new Map(airports.map((airport) => [airport.icao, airport]));
const options = airports.map((airport) => `${airport.name} ${airport.city} ${airport.country} ${airport.iata} (${airport.icao})`);
const extractIcao = (value) => /\((\w{4})\)$/.exec(value)?.[1];

function datalistInput(placeholder, listId, document) {
  const input = document.createElement('input'); input.type = 'text'; input.autocomplete = 'off'; input.placeholder = placeholder; input.style.fontSize = '1em'; input.setAttribute('list', listId);
  const list = document.createElement('datalist'); list.id = listId; options.forEach((value) => { const option = document.createElement('option'); option.value = value; list.append(option); });
  const wrapper = document.createElement('span'); wrapper.append(input, list); return {wrapper, input};
}

export function createFlightListControl(document = globalThis.document) {
  const root = document.createElement('p'); root.value = [];
  const departure = datalistInput('Choose departure airport', 'flight-departures', document); const arrival = datalistInput('Choose arrival airport', 'flight-arrivals', document);
  const line = document.createElement('br');
  const button = (value) => { const input = document.createElement('input'); input.type = 'button'; input.value = value; return input; };
  const add = button('Add flight'); const reset = button('Clear all flights'); const empty = button('Clear current inputs'); const swap = button('Switch departure and arrival airports');
  add.onclick = () => { if (!departure.input.value || !arrival.input.value) throw new Error('Must select both a departure and arrival airport'); root.value.push([extractIcao(departure.input.value), extractIcao(arrival.input.value)]); root.dispatchEvent(new CustomEvent('input')); };
  empty.onclick = () => { departure.input.value = ''; arrival.input.value = ''; };
  swap.onclick = () => { const value = departure.input.value; departure.input.value = arrival.input.value; arrival.input.value = value; };
  reset.onclick = () => { root.value = []; departure.input.value = ''; arrival.input.value = ''; root.dispatchEvent(new CustomEvent('input')); };
  root.append(departure.wrapper, ' ', arrival.wrapper, line, add, reset, empty, swap); return root;
}

function distance(lat1, lon1, lat2, lon2) {
  const radians = (degrees) => degrees * Math.PI / 180; const dLat = radians(lat2 - lat1); const dLon = radians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 0.621371;
}

export function flightRoutes(flights) {
  return flights.map(([from, to]) => {
    const left = airportsByIcao.get(from); const right = airportsByIcao.get(to); const route = {from: left.name, to: right.name};
    Object.entries(left).forEach(([key, value]) => { route[`${key}_from`] = value; }); Object.entries(right).forEach(([key, value]) => { route[`${key}_to`] = value; });
    route.distance = distance(route.lat_from, route.lng_from, route.lat_to, route.lng_to); return route;
  });
}

export function renderFlightTable(routes, document = globalThis.document) {
  if (!routes.length) return document.createTextNode('Add a flight to display flight data here.');
  const wrapper = document.createElement('div'); const style = document.createElement('style'); style.textContent = `.pretty-pager{padding-top:1rem}.pretty-pager button{cursor:pointer;border-radius:3px;border:1px solid #fff;font-size:inherit}.pretty-pager button:hover{border:1px solid #888}.pretty-table.normal{font-size:15px}.pretty-table.normal th,.pretty-table.normal td{padding:3px 2px}.pretty-table th,.pretty-table td{vertical-align:top}.pretty-table thead th{text-transform:uppercase;font-weight:500}`;
  const table = document.createElement('table'); table.className = 'pretty-table normal'; const head = table.createTHead().insertRow(); ['from', 'to', 'miles'].forEach((key) => { const th = document.createElement('th'); th.textContent = key; th.className = 'column-type-string'; head.append(th); });
  const body = table.createTBody(); routes.forEach((route) => { const row = body.insertRow(); [route.name_from, route.name_to, d3.format(',.0f')(route.distance)].forEach((value) => { const cell = row.insertCell(); cell.textContent = value; }); });
  const pager = document.createElement('div'); pager.className = 'pretty-pager'; pager.innerHTML = '<button>Previous</button><button>1</button><button>Next</button>'; wrapper.append(style, table, pager); return wrapper;
}

export function renderFlightBlurb(routes, document = globalThis.document) {
  const paragraph = document.createElement('p'); if (!routes.length) return paragraph;
  const miles = d3.sum(routes, (route) => route.distance); const energy = flying.flying_miles_to_kwh(miles); const tonnes = energy * convert.per('kg_co2_from_jet_fuel/kwh') / 1000;
  paragraph.textContent = `Your total flight distance is ${d3.format(',.0f')(miles)} miles. If flying economy, this will have required around ${d3.format(',.2r')(energy)} kwh of energy, and the total co2 emissions will be around ${d3.format(',.2r')(tonnes)} tonnes.`; return paragraph;
}

export function createFlightsDownload(routes, document = globalThis.document) {
  const link = document.createElement('a'); link.download = 'flights.csv'; link.textContent = 'Download CSV'; link.href = URL.createObjectURL(new Blob([d3.csvFormat(routes)], {type: 'text/csv'})); return link;
}

export function createFlightsUpload(control, document = globalThis.document) {
  const input = document.createElement('input'); input.type = 'file'; input.accept = 'text/csv';
  input.onchange = async () => { const file = input.files?.[0]; if (!file) return; const csv = d3.csvParse(await file.text()); control.value = csv.map((row) => [row.icao_from, row.icao_to]); control.dispatchEvent(new CustomEvent('input')); }; return input;
}

function resample(coordinates, projection) {
  let i = 0; const n = coordinates.length; const before = []; const after = []; let c1;
  while (++i < n) { const c0 = coordinates[i - 1].slice(); c1 = coordinates[i].slice(); const p0 = projection(c0); const p1 = projection(c1); const x10 = p1[0] - p0[0]; const y10 = p1[1] - p0[1]; const d1 = x10 * x10 + y10 * y10; before.push(c0); after.push(c0); if (d1 > 0.4) { const c2 = d3.geoInterpolate(c0, c1)(0.5); const p2 = projection(c2); const x20 = p2[0] - p0[0]; const y20 = p2[1] - p0[1]; const dz = y10 * x20 - x10 * y20; if ((dz * dz) / d1 > 0.1) { const t = (x20 * x10 + y20 * y10) / d1; before.push(projection.invert(c2.resampled = [p0[0] + t * x10, p0[1] + t * y10])); after.push(c2); } } }
  if (n) { before.push(c1); after.push(c1); } return {before, after};
}

export function renderFlightMap(routes, width, document = globalThis.document) {
  const height = width * 0.6; const sphere = {type: 'Sphere'}; const land = feature(world, world.objects.land); const projection = geoEqualEarth().fitExtent([[1, 1], [width - 1, height - 1]], sphere).translate([width / 2, height / 2]).rotate([0, 0]).precision(0.1);
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height; const context = canvas.getContext('2d'); const path = d3.geoPath(projection, context); const colour = d3.scaleSequential(d3.interpolateOrRd).domain(d3.extent(routes, (route) => route.distance));
  function render() { context.clearRect(0, 0, width, height); context.beginPath(); path(sphere); context.fillStyle = '#fff'; context.fill(); context.beginPath(); path(land); context.fillStyle = '#000'; context.fill(); context.beginPath(); path(sphere); context.stroke(); routes.forEach((route) => { const sampled = resample([[route.lng_from, route.lat_from], [route.lng_to, route.lat_to]], projection); sampled.after[1] = [sampled.after[1][0] + (route.lat_from + route.lng_to) / 100, sampled.after[1][1] + (route.lat_from + route.lng_to) / 100]; context.lineWidth = 1.5; context.beginPath(); path({type: 'LineString', coordinates: sampled.after}); context.strokeStyle = colour(route.distance); context.stroke(); }); context.lineWidth = 1; context.strokeStyle = '#000'; }
  let v0; let q0; let r0; const dragging = d3.drag().on('start', function () { v0 = versor.cartesian(projection.invert(d3.mouse(this))); q0 = versor(r0 = projection.rotate()); }).on('drag', function () { const v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this))); projection.rotate(versor.rotation(versor.multiply(q0, versor.delta(v0, v1)))); });
  d3.select(canvas).call(dragging.on('drag.render', render)).call(render); return canvas;
}
