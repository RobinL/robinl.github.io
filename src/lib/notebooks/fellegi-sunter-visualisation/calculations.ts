import katex from 'katex';
import {matchColor, nonMatchColor} from './treemap';
import type {ComparisonColumn, ExampleRow, VisualisationSettings} from './types';

const examples = {
  fname: [
    {fname_l: 'John', fname_r: 'Tom'},
    {fname_l: 'John', fname_r: 'John'},
  ],
  sname: [
    {sname_l: 'Smith', sname_r: 'Hanks'},
    {sname_l: 'Smith', sname_r: 'Smith'},
  ],
  dob: [
    {dob_l: '1989-03-02', dob_r: '1981-08-21'},
    {dob_l: '1989-03-02', dob_r: '1989-03-02'},
  ],
  town: [
    {town_l: 'Bristol', town_r: 'Peckham'},
    {town_l: 'Bristol', town_r: 'Bristol'},
  ],
} as const;

export function exampleRow(settings: VisualisationSettings, depth: number): ExampleRow {
  const row: ExampleRow = {};
  for (const column of settings.comparison_columns.slice(0, depth)) {
    Object.assign(row, examples[column.col_name][column.gamma_value]);
    row[`γ_${column.col_name}`] = column.gamma_value;
  }
  return row;
}

export function matchProbability(settings: VisualisationSettings, depth = settings.comparison_columns.length): number {
  let match = settings.proportion_of_matches;
  let nonMatch = 1 - settings.proportion_of_matches;
  for (const column of settings.comparison_columns.slice(0, depth)) {
    match *= column.m_probabilities[column.gamma_value];
    nonMatch *= column.u_probabilities[column.gamma_value];
  }
  return match / (match + nonMatch);
}

export function selectedProbability(column: ComparisonColumn, type: 'm' | 'u'): number {
  return column[`${type}_probabilities`][column.gamma_value];
}

export function renderStepDetails(
  settings: VisualisationSettings,
  depth: number,
  document: Document = globalThis.document,
): HTMLDivElement {
  const column = settings.comparison_columns[depth - 1];
  const root = document.createElement('div');
  const matchingText = column.gamma_value === 1 ? 'matches' : 'does not match';
  const intro = document.createElement('p');
  intro.append(`You have chosen that the column `, code(column.col_name, document), ` ${matchingText}, i.e. that γ${column.col_name} = ${column.gamma_value}.`);
  root.append(intro, paragraph('An example of the data would be:', document));
  root.append(renderRecordTable(exampleRow(settings, depth), document));
  root.append(paragraph("According to the model parameters you've chosen:", document));
  const list = document.createElement('ul');
  list.append(
    probabilityItem(column, 'm', 'matching records', 'fs-match-highlight', document),
    probabilityItem(column, 'u', 'non-matching records', 'fs-non-match-highlight', document),
  );
  root.append(list, paragraph('Given this observation, the comparison space is subdivided; the highlighted yellow and blue areas are the possible regions.', document));
  return root;
}

export function renderProbabilityExplanation(
  settings: VisualisationSettings,
  depth: number,
  document: Document = globalThis.document,
): HTMLDivElement {
  const root = document.createElement('div');
  root.append(paragraph(depth === settings.comparison_columns.length
    ? 'The final match probability is therefore:'
    : 'The updated match probability is:', document));
  const columns = settings.comparison_columns.slice(0, depth);
  const mTerms = columns.map((_, index) => `m_{${index + 1}\\ell}`).join('');
  const uTerms = columns.map((_, index) => `u_{${index + 1}\\ell}`).join('');
  root.append(renderMath(String.raw`\text{match probability}=\frac{\lambda ${mTerms}}{\lambda ${mTerms}+(1-\lambda)${uTerms}}`, document));

  const mValues = columns.map((column) => selectedProbability(column, 'm').toFixed(2));
  const uValues = columns.map((column) => selectedProbability(column, 'u').toFixed(2));
  const prior = settings.proportion_of_matches.toFixed(2);
  root.append(renderMath(String.raw`=\frac{${prior}\times ${mValues.join('\\times ')}}{${prior}\times ${mValues.join('\\times ')}+${(1 - settings.proportion_of_matches).toFixed(2)}\times ${uValues.join('\\times ')}}=${matchProbability(settings, depth).toPrecision(4)}`, document));
  return root;
}

export function renderPriorExplanation(
  settings: VisualisationSettings,
  document: Document = globalThis.document,
): HTMLDivElement {
  const root = document.createElement('div');
  root.append(paragraph('Using only this information, our estimate of match probability is just the prior:', document));
  root.append(renderMath(String.raw`\text{match probability}=\frac{\lambda}{\lambda+(1-\lambda)}=${settings.proportion_of_matches.toPrecision(4)}`, document));
  return root;
}

function probabilityItem(column: ComparisonColumn, type: 'm' | 'u', label: string, className: string, document: Document) {
  const item = document.createElement('li');
  const matchText = column.gamma_value ? 'matches' : 'does not match';
  const highlight = document.createElement('span');
  highlight.className = className;
  highlight.style.backgroundColor = type === 'm' ? matchColor : nonMatchColor;
  highlight.textContent = label;
  item.append(`The column ${column.col_name} ${matchText} in ${(selectedProbability(column, type) * 100).toFixed(0)}% of `, highlight);
  return item;
}

function renderRecordTable(row: ExampleRow, document: Document): HTMLTableElement {
  const table = document.createElement('table');
  const header = table.insertRow();
  const values = table.insertRow();
  Object.entries(row).filter(([key]) => !key.startsWith('γ_')).forEach(([key, value]) => {
    const th = document.createElement('th');
    th.textContent = key;
    header.append(th);
    const td = values.insertCell();
    td.textContent = String(value);
  });
  return table;
}

function renderMath(formula: string, document: Document): HTMLDivElement {
  const root = document.createElement('div');
  katex.render(formula, root, {displayMode: true, throwOnError: false, fleqn: true});
  return root;
}

function paragraph(text: string, document: Document): HTMLParagraphElement {
  const element = document.createElement('p');
  element.textContent = text;
  return element;
}

function code(text: string, document: Document): HTMLElement {
  const element = document.createElement('code');
  element.textContent = text;
  return element;
}
