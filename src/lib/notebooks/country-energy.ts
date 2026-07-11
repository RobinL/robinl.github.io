import embed from 'vega-embed';
import countriesRaw from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/countries.json';
import finalEnergyRaw from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/final-energy-2014.json';
import finalEnergyDefinition from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/final-energy-definition.json';
import populationRaw from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/population-2014.json';
import primaryEnergyRaw from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/primary-energy-2014.json';
import primaryEnergyDefinition from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/primary-energy-definition.json';
import countryCodes from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/world-country-codes.json';
import world from '../../notebooks/migrated/energy-usage-and-goods-imports-and-exports/world-110m.json';

type WorldBankRow = {country: {id: string}; countryiso3code: string; indicator: {value: string}; value: number | null};
type CountryRow = {id: string; iso2Code: string};

function lookup(raw: unknown): Record<string, WorldBankRow> {
  return Object.fromEntries(((raw as [unknown, WorldBankRow[]])[1] || []).flatMap((item) => {
    const key = item.countryiso3code || (item.country.id.length === 3 ? item.country.id : '');
    return key ? [[key, item]] : [];
  }));
}

const countries = (countriesRaw as unknown as [unknown, CountryRow[]])[1];
const countriesByIso2 = Object.fromEntries(countries.map((country) => [country.iso2Code, country]));
const primary = lookup(primaryEnergyRaw);
const final = lookup(finalEnergyRaw);
const population = lookup(populationRaw);

export const primaryEnergyLabel = primary.GBR.indicator.value;
export const finalEnergyLabel = final.GBR.indicator.value;
export const primaryEnergyDefinitionText = (primaryEnergyDefinition as any)[1][0].sourceNote as string;
export const finalEnergyDefinitionText = (finalEnergyDefinition as any)[1][0].sourceNote as string;

export const metricLabels = {
  final_energy_consumption_per_capita_kwh: 'Final energy consumption, kwh per capita per day ',
  primary_energy_per_capita_kwh: 'Primary energy consumption, kwh per capita per day',
} as const;
export type EnergyMetric = keyof typeof metricLabels;

export const energyCountryData = (countryCodes as Array<{code: string; id: number; name: string}>).map((country) => {
  const iso3 = countriesByIso2[country.code]?.id;
  const primaryOil = primary[iso3]?.value == null ? null : Number(primary[iso3].value);
  const finalTj = final[iso3]?.value == null ? null : Number(final[iso3].value);
  const pop = population[iso3]?.value == null ? null : Number(population[iso3].value);
  return {
    iso2code: country.code, country_name: country.name, country_id: country.id, population: pop,
    primary_energy_per_capita_kg_oil_eq: primaryOil,
    total_final_energy_consumption_tj: finalTj,
    primary_energy_per_capita_kwh: primaryOil == null ? null : primaryOil * 11.63 / 365,
    final_energy_consumption_per_capita_kwh: finalTj == null || pop == null || pop === 0 ? null : (finalTj * 1e12 / (pop * 3600000)) / 365.25,
  };
});

export function createEnergyMetricSelect(document: Document = globalThis.document) {
  const form = document.createElement('form') as HTMLFormElement & {value: EnergyMetric; input: HTMLSelectElement};
  const title = document.createElement('div'); title.style.cssText = 'font: 700 0.9rem sans-serif;'; title.textContent = 'Select metric to plot';
  const select = document.createElement('select'); select.name = 'input';
  for (const [value, label] of Object.entries(metricLabels)) { const option = document.createElement('option'); option.value = value; option.textContent = label; option.selected = value === 'final_energy_consumption_per_capita_kwh'; select.append(option); }
  Object.defineProperty(form, 'input', {value: select});
  form.value = 'final_energy_consumption_per_capita_kwh';
  select.oninput = () => { form.value = select.value as EnergyMetric; };
  form.onsubmit = (event) => event.preventDefault(); form.append(title, select); return form;
}

export async function renderEnergyCountryMap(metric: EnergyMetric, width: number, document: Document = globalThis.document) {
  const root = document.createElement('div'); const height = width / 1.8;
  await embed(root, {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json', title: metricLabels[metric], width, height, autosize: 'fit',
    config: {view: {stroke: 'transparent'}}, data: {values: world, format: {type: 'topojson', feature: 'countries'}},
    transform: [{lookup: 'id', from: {data: {values: energyCountryData}, key: 'country_id', fields: ['final_energy_consumption_per_capita_kwh', 'primary_energy_per_capita_kwh', 'country_name']}}],
    projection: {type: 'naturalEarth1', scale: width / 4.5, center: [10, 10], translate: [width / 2, height / 2]},
    mark: {type: 'geoshape', stroke: '#757575', strokeWidth: 0.5},
    encoding: {color: {field: metric, type: 'quantitative', legend: null}, tooltip: [
      {field: 'primary_energy_per_capita_kwh', type: 'quantitative', format: ',.1f'},
      {field: 'final_energy_consumption_per_capita_kwh', type: 'quantitative', format: ',.1f'}, {field: 'country_name', type: 'nominal'},
    ]},
  } as any); return root;
}

export async function renderEnergyCountryBars(metric: EnergyMetric, width: number, document: Document = globalThis.document) {
  const root = document.createElement('div');
  await embed(root, {
    data: {values: energyCountryData}, transform: [{filter: {field: 'population', gt: '20e6'}}, {filter: {field: metric, gt: 0}}],
    width, height: 1000, autosize: 'fit', mark: 'bar',
    encoding: {y: {field: 'country_name', type: 'nominal', sort: {field: metric, op: 'mean', order: 'descending'}}, x: {field: metric, type: 'quantitative'}, tooltip: [
      {field: 'primary_energy_per_capita_kwh', type: 'quantitative', format: ',.1f'},
      {field: 'final_energy_consumption_per_capita_kwh', type: 'quantitative', format: ',.1f'}, {field: 'country_name', type: 'nominal'},
    ]}, title: `${metricLabels[metric]} for countries with population > 20 million`,
  } as any); return root;
}

export function createEnergyChartStyles(document: Document = globalThis.document) {
  const style = document.createElement('style'); style.textContent = `.vega-embed-wrapper {overflow: hidden}\n#vg-tooltip-element table td {white-space: nowrap;font-size: 0.8rem;border-bottom: 0px;}\n#vg-tooltip-element table tr td.key {max-width:500px;}\n#vg-tooltip-element table {margin-bottom: 0rem;line-height: 1rem;border-collapse: unset;}`; return style;
}
