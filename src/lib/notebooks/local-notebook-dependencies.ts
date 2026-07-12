import * as Inputs from '@observablehq/inputs';
import alasqlImport from 'alasql';
import * as d3 from 'd3';
import levenshteinImport from 'fast-levenshtein';
import * as vega from 'vega';
import embedImport from 'vega-embed';
import * as vegalite from 'vega-lite';
import * as vegaLiteApi from 'vega-lite-api';
import * as topojson from 'topojson-client';
import world from 'world-atlas/world/110m.json';
import usa from 'us-atlas/us/states-10m.json';
import {createObservableVegaEmbed} from './observable-vega-embed';

export {Inputs, d3, topojson};
export {world};
export {usa};
export const d3geo = d3;
export const d3format = d3;
// Recovered Observable notebooks call Vega Embed with a single spec argument.
// The package ESM API instead expects (element, spec), so retain Observable's
// one-argument container behaviour while still allowing the normal ESM form.
export const embed = createObservableVegaEmbed(embedImport) as typeof embedImport;
export const alasql = alasqlImport;
export const levenshtein = levenshteinImport;
export const vl = vegaLiteApi.register(vega, vegalite, {
  config: {view: {continuousWidth: 400, continuousHeight: 300}, mark: {tooltip: null}},
  init: (view: vega.View) => {
    const container = view.container();
    if (container) container.style.overflowX = 'auto';
  },
  view: {renderer: 'canvas'},
});
