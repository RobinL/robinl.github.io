import * as Inputs from '@observablehq/inputs';

export {Inputs as inputs};
export const default_splink_settings = `{
  "proportion_of_matches": 0.01,
  "comparison_columns": [
    {"col_name":"fname","u_probabilities":[0.8,0.2],"m_probabilities":[0.2,0.8]},
    {"col_name":"sname","u_probabilities":[0.9,0.1],"m_probabilities":[0.2,0.8]},
    {"col_name":"dob","u_probabilities":[0.99,0.01],"m_probabilities":[0.2,0.8]},
    {"col_name":"town","u_probabilities":[0.7,0.3],"m_probabilities":[0.3,0.7]}
  ]
}`;

type Row = Record<string, string | number | null>;
class Frame {
  constructor(private rows: Row[]) {}
  objects() { return this.rows; }
  numRows() { return this.rows.length; }
  slice(start: number, end?: number) { return new Frame(this.rows.slice(start, end)); }
  view() { return table(this.rows); }
  toMarkdown() {
    const columns = Object.keys(this.rows[0] ?? {});
    return `| ${columns.join(' | ')} |\n| ${columns.map(() => '---').join(' | ')} |\n${this.rows.map((row) => `| ${columns.map((column) => row[column] ?? '').join(' | ')} |`).join('\n')}`;
  }
}

const left: Row[] = [
  {uid: '1_l', fname: 'John', sname: 'Smith', dob: '1989-03-02', town: 'Bristol'},
  {uid: '2_l', fname: 'Emma', sname: 'Jones', dob: '1956-07-09', town: 'Hull'},
  {uid: '3_l', fname: 'David', sname: 'Smith', dob: '1981-08-21', town: 'London'},
];
const right: Row[] = [
  {uid: '1_r', fname: 'John', sname: 'Smith', dob: '1989-03-02', town: 'Bath'},
  {uid: '2_r', fname: 'Emma', sname: 'Jones', dob: '1956-07-09', town: 'Hull'},
];

function table(rows: Row[], documentRef: Document = document) {
  const element = documentRef.createElement('table');
  const columns = Object.keys(rows[0]);
  const head = element.insertRow();
  columns.forEach((column) => { const th = documentRef.createElement('th'); th.textContent = column; head.append(th); });
  rows.forEach((record) => { const tr = element.insertRow(); columns.forEach((column) => { const td = tr.insertCell(); td.textContent = String(record[column] ?? ''); if (column !== 'uid') td.contentEditable = 'true'; }); });
  return element;
}

export const table_l = table(left);
export const table_r = table(right);
const comparisons = left.flatMap((l) => right.map((r) => Object.fromEntries(Object.keys(l).flatMap((key) => key === 'uid' ? [['uid_l', l.uid], ['uid_r', r.uid]] : [[`${key}_l`, l[key]], [`${key}_r`, r[key]]]))));
const gammas = comparisons.map((row) => ({...row, ...Object.fromEntries(['fname', 'sname', 'dob', 'town'].map((column) => [`𝛾_${column}`, Number(row[`${column}_l`] === row[`${column}_r`])]))}));
export const df_comparisons_1 = new Frame(comparisons);
export const df_gammas_1 = new Frame(gammas);
export const df_gammas_only_1 = new Frame(gammas.map((row) => Object.fromEntries(Object.entries(row).filter(([key]) => key.startsWith('𝛾_')))));
export const example_2_comparison = null;
export const intro_simple_waterfall = null;

type Settings = {proportion_of_matches: number; comparison_columns: Array<{col_name: string; m_probabilities: number[]; u_probabilities: number[]}>};
export function get_match_probability_components(row: Row, settings: Settings, numColumns = settings.comparison_columns.length) {
  const columns = settings.comparison_columns.slice(0, numColumns);
  const gamma = columns.map((column) => Number(row[`𝛾_${column.col_name}`]));
  const m = columns.map((column, index) => column.m_probabilities[gamma[index]]);
  const u = columns.map((column, index) => column.u_probabilities[gamma[index]]);
  const matchMass = settings.proportion_of_matches * m.reduce((a, b) => a * b, 1);
  const nonMatchMass = (1 - settings.proportion_of_matches) * u.reduce((a, b) => a * b, 1);
  return {comparison_vector: gamma, gamma_symbols: columns.map((column) => `\\gamma_\\text{${column.col_name.replace('_', '\\_')}}`), m_values: m, u_values: u,
    m_symbols: columns.map((column, index) => `m_{\\text{${column.col_name}},${gamma[index]}}`), u_symbols: columns.map((column, index) => `u_{\\text{${column.col_name}},${gamma[index]}}`),
    lam: settings.proportion_of_matches, size_of_match_portion: matchMass, size_of_non_match_portion: nonMatchMass, match_probability: matchMass / (matchMass + nonMatchMass)};
}
export function get_comparison_vector_symbols_and_numbers(row: Row, settings: Settings, n?: number) { const d = get_match_probability_components(row, settings, n); return `\\bm{\\gamma} = [${d.gamma_symbols.join(', ')}]= [${d.comparison_vector.join(', ')}]`; }
export function get_m_u_formula_symbols(row: Row, settings: Settings) { const d = get_match_probability_components(row, settings); const a = ['\\lambda', ...d.m_symbols].join(' '); const b = ['(1 - \\lambda)', ...d.u_symbols].join(' '); return `\\frac{${a}}{(${a}) + (${b})}`; }
export function get_m_u_formula_numbers(row: Row, settings: Settings, n?: number) { const d = get_match_probability_components(row, settings, n); const m = [d.lam.toPrecision(3), ...d.m_values.map((x) => x.toPrecision(3))].join(' \\times '); const u = [`(1 - ${d.lam.toPrecision(3)})`, ...d.u_values.map((x) => x.toPrecision(3))].join(' \\times '); return `\\frac{${m}}{(${m}) + (${u})} \\newline = \\frac{${d.size_of_match_portion.toPrecision(3)}}{${d.size_of_match_portion.toPrecision(3)} + ${d.size_of_non_match_portion.toPrecision(3)}} \\newline = ${d.match_probability.toPrecision(3)}`; }
