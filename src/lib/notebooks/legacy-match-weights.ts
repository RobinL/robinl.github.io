import * as Inputs from '@observablehq/inputs';
import embed from 'vega-embed';
import {createObservableVegaEmbed} from './observable-vega-embed';
import {renderWaterfallChart} from './record-linkage/charts';
import {settingsToWaterfall} from './record-linkage/model';

export {Inputs};

export type LegacySplinkSettings = {
  proportion_of_matches: number;
  comparison_columns: Array<{col_name: string; m_probabilities: number[]; u_probabilities: number[]}>;
};

export const defaultSplinkSettings = `{
  "proportion_of_matches": 0.001,
  "comparison_columns": [
    {"col_name":"fname","u_probabilities":[0.8,0.2],"m_probabilities":[0.2,0.8]},
    {"col_name":"sname","u_probabilities":[0.9,0.1],"m_probabilities":[0.2,0.8]},
    {"col_name":"dob","u_probabilities":[0.99,0.01],"m_probabilities":[0.2,0.8]},
    {"col_name":"town","u_probabilities":[0.7,0.3],"m_probabilities":[0.3,0.7]}
  ]
}`;

export function comparisonRow(fname: string, sname: string, dob: string, town: string) {
  return {'𝛾_fname': Number(fname === 'Values match'), '𝛾_sname': Number(sname === 'Values match'),
    '𝛾_dob': Number(dob === 'Values match'), '𝛾_town': Number(town === 'Values match')};
}

function chartData(settings: LegacySplinkSettings) {
  return settings.comparison_columns.flatMap((column) => column.m_probabilities.map((m, index) => {
    const u = column.u_probabilities[index];
    return {column_name: column.col_name, level_name: `level_${index}`, gamma_index: index,
      m_probability: m, u_probability: u, bayes_factor: m / u, log2_bayes_factor: Math.log2(m / u)};
  }));
}

async function render(spec: object) { return createObservableVegaEmbed(embed)(spec); }

export function renderMandUChart(settings: LegacySplinkSettings) {
  const data = chartData(settings);
  return render({$schema: 'https://vega.github.io/schema/vega-lite/v5.json', data: {values: data},
    title: {text: 'Probability distributions of non-matches and matches', subtitle: `Estimated proportion of matches λ = ${settings.proportion_of_matches}`},
    hconcat: [
      {title: 'Non-matches', mark: {type: 'bar', color: 'red'}, encoding: {row: {field: 'column_name', type: 'nominal'}, x: {field: 'u_probability', type: 'quantitative', title: 'proportion'}, y: {field: 'level_name', type: 'nominal', title: null}}},
      {title: 'Matches', mark: {type: 'bar', color: 'green'}, encoding: {row: {field: 'column_name', type: 'nominal'}, x: {field: 'm_probability', type: 'quantitative', title: 'proportion'}, y: {field: 'level_name', type: 'nominal', title: null}}},
    ]});
}

export function renderBayesFactorChart(settings: LegacySplinkSettings) {
  return render({$schema: 'https://vega.github.io/schema/vega-lite/v5.json', data: {values: chartData(settings)},
    title: {text: 'Influence of comparison vector values on match probability', subtitle: `Estimated proportion of matches λ = ${settings.proportion_of_matches.toPrecision(4)}`},
    mark: 'bar', encoding: {row: {field: 'column_name', type: 'nominal'}, x: {field: 'log2_bayes_factor', type: 'quantitative', title: 'log2(Bayes factor, K = m/u)', scale: {domain: [-10, 10]}},
      y: {field: 'level_name', type: 'nominal', title: null}, color: {field: 'log2_bayes_factor', type: 'quantitative', scale: {domain: [-10, 0, 10], range: ['red', 'orange', 'green']}}}});
}

export function waterfallData(row: Record<string, number>, settings: LegacySplinkSettings) {
  const priorOdds = settings.proportion_of_matches / (1 - settings.proportion_of_matches);
  const values = [{label: 'Prior', weight: Math.log2(priorOdds), order: 0}];
  settings.comparison_columns.forEach((column, index) => {
    const level = row[`𝛾_${column.col_name}`] ?? 0;
    values.push({label: column.col_name, weight: Math.log2(column.m_probabilities[level] / column.u_probabilities[level]), order: index + 1});
  });
  return values;
}

export function matchProbability(row: Record<string, number>, settings: LegacySplinkSettings) {
  const weight = waterfallData(row, settings).reduce((sum, item) => sum + item.weight, 0);
  const odds = 2 ** weight;
  return odds / (1 + odds);
}

export function renderWaterfall(row: Record<string, number>, settings: LegacySplinkSettings) {
  const modernSettings = {
    link_type: 'dedupe_only' as const,
    probability_two_random_records_match: settings.proportion_of_matches,
    comparisons: settings.comparison_columns.map((column) => ({
      output_column_name: column.col_name,
      comparison_description: `Match versus non-match for ${column.col_name}`,
      comparison_levels: [1, 0].map((level) => ({
        sql_condition: level ? 'Values match' : 'Values do not match',
        label_for_charts: level ? 'Values match' : 'Values do not match',
        m_probability: column.m_probabilities[level],
        u_probability: column.u_probabilities[level],
      })),
    })),
  };
  const vector = Object.fromEntries(Object.entries(row).map(([key, value]) => [key.replace('𝛾_', 'γ_'), value]));
  return renderWaterfallChart(settingsToWaterfall(modernSettings, vector), false);
}

export const inputs = Inputs;
export const default_splink_settings = defaultSplinkSettings;
export const get_m_u_chart = renderMandUChart;
export const get_bayes_factor_chart = renderBayesFactorChart;
export const get_waterfall_chart = (row: Record<string, number>, settings: LegacySplinkSettings) => renderWaterfall(row, settings);
export const get_match_probability_components = (row: Record<string, number>, settings: LegacySplinkSettings) => ({match_probability: matchProbability(row, settings)});
