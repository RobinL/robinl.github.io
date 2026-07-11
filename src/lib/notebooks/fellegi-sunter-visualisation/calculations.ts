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
  intro.append('You have chosen that the column ', code(column.col_name, document), ` ${matchingText}, i.e. that `, renderInlineMath(String.raw`\gamma_\text{${column.col_name}}`, document), ` = ${column.gamma_value}.`);
  root.append(intro, paragraph('An example of the data would be:', document));
  root.append(renderRecordTable(exampleRow(settings, depth), document));
  root.append(paragraph("According to the model parameters you've chosen:", document));
  const list = document.createElement('ul');
  list.append(
    probabilityItem(column, 'm', 'matching records', 'fs-match-highlight', document),
    probabilityItem(column, 'u', 'non-matching records', 'fs-non-match-highlight', document),
  );
  root.append(list);
  const conclusion = document.createElement('p');
  conclusion.append('Given this observation, we can subdivide the comparison space, and we know we must be in the ', highlight('yellow', 'fs-match-highlight', matchColor, document), ' or ', highlight('blue', 'fs-non-match-highlight', nonMatchColor, document), ' part of the following diagram:');
  root.append(conclusion);
  return root;
}

export function renderProbabilityExplanation(
  settings: VisualisationSettings,
  depth: number,
  document: Document = globalThis.document,
): HTMLDivElement {
  const root = document.createElement('div');
  const columns = settings.comparison_columns.slice(0, depth);
  const mTerms = columns.map((_, index) => `m_{${index + 1}\\ell}`).join('');
  const uTerms = columns.map((_, index) => `u_{${index + 1}\\ell}`).join('');
  if (depth === 1) {
    root.append(paragraph("What's the probability we're in the yellow area? This must be:", document));
    root.append(renderAreaFormula(document));
    const areas = document.createElement('p');
    areas.append('From this diagram we can see that the ', renderInlineMath(String.raw`\colorbox{${matchColor}}{\text{yellow area}=\lambda m_{1\ell}}`, document), ' and the ', renderInlineMath(String.raw`\colorbox{${nonMatchColor}}{\text{blue area}=(1-\lambda)u_{1\ell}}`, document), '.');
    root.append(areas);
    root.append(paragraph('So:', document));
  } else if (depth === 2) {
    root.append(paragraph('We now have:', document), renderAreaFormula(document));
  } else if (depth === settings.comparison_columns.length) {
    root.append(paragraph('The final match probability is therefore:', document));
  } else {
    root.append(paragraph('We now have:', document));
  }
  root.append(renderMath(String.raw`\text{match probability}=\frac{\lambda ${mTerms}}{\lambda ${mTerms}+(1-\lambda)${uTerms}}`, document));
  root.append(paragraph('Which, in numbers is:', document), renderNumericFormula(settings, depth, document));
  return root;
}

export function renderPriorExplanation(
  settings: VisualisationSettings,
  document: Document = globalThis.document,
): HTMLDivElement {
  const root = document.createElement('div');
  root.append(paragraph('Using only this information, our estimate of match probability is just the prior:', document));
  root.append(renderMath(String.raw`\text{match probability}=\frac{\lambda}{\lambda+(1-\lambda)}=\frac{\colorbox{${matchColor}}{\text{yellow area}}}{\colorbox{${matchColor}}{\text{yellow area}}+\colorbox{${nonMatchColor}}{\text{blue area}}}=${settings.proportion_of_matches.toPrecision(4)}`, document));
  return root;
}

function renderAreaFormula(document: Document): HTMLElement {
  return renderMath(String.raw`\text{match probability}=\frac{\colorbox{${matchColor}}{\text{yellow area}}}{\colorbox{${matchColor}}{\text{yellow area}}+\colorbox{${nonMatchColor}}{\text{blue area}}}`, document);
}

function renderNumericFormula(settings: VisualisationSettings, depth: number, document: Document): HTMLElement {
  const columns = settings.comparison_columns.slice(0, depth);
  const prior = settings.proportion_of_matches;
  const mValues = columns.map((column) => selectedProbability(column, 'm'));
  const uValues = columns.map((column) => selectedProbability(column, 'u'));
  const matchMass = mValues.reduce((value, probability) => value * probability, prior);
  const nonMatchMass = uValues.reduce((value, probability) => value * probability, 1 - prior);
  const numerator = [prior, ...mValues].map((value) => value.toPrecision(3)).join(String.raw` \times `);
  const other = [`(1 - ${prior.toPrecision(3)})`, ...uValues.map((value) => value.toPrecision(3))].join(String.raw` \times `);
  const formula = String.raw`\frac{${numerator}}{(${numerator})+(${other})}\newline=\frac{${matchMass.toPrecision(3)}}{${matchMass.toPrecision(3)}+${nonMatchMass.toPrecision(3)}}\newline=${matchProbability(settings, depth).toPrecision(3)}`;
  if (depth === 1 || depth === settings.comparison_columns.length) {
    const wrapper = document.createElement('div');
    wrapper.append(renderInlineMath(formula, document));
    return wrapper;
  }
  return renderMath(formula, document);
}

function probabilityItem(column: ComparisonColumn, type: 'm' | 'u', label: string, className: string, document: Document) {
  const item = document.createElement('li');
  const matchText = column.gamma_value ? 'matches' : 'does not match';
  item.append('The column ', code(column.col_name, document), ` ${matchText} in ${(selectedProbability(column, type) * 100).toFixed(0)}% of `, highlight(label, className, type === 'm' ? matchColor : nonMatchColor, document));
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

function renderMath(formula: string, document: Document): HTMLElement {
  const root = document.createElement('div');
  katex.render(formula, root, {displayMode: true, throwOnError: false, fleqn: true});
  return root.removeChild(root.firstElementChild!) as HTMLElement;
}

function renderInlineMath(formula: string, document: Document): HTMLSpanElement {
  const root = document.createElement('span');
  katex.render(formula, root, {throwOnError: false});
  return root.removeChild(root.firstElementChild!) as HTMLSpanElement;
}

function highlight(text: string, className: string, color: string, document: Document): HTMLSpanElement {
  const element = document.createElement('span');
  element.className = className;
  element.style.backgroundColor = color;
  element.textContent = text;
  return element;
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
