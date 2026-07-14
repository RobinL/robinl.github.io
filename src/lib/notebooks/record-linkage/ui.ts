import { probabilityFromMatchWeight, roundToSignificantFigures } from './conversions';
import katex from 'katex';
import type { DataRecord, PartialMatchWeightRecord, WaterfallRecord } from './types';

const columns = ['first_name', 'surname', 'postcode', 'gender'] as const;
const colors: Record<string, string> = {
  first_name: '#ff7f0e',
  surname: '#2ca02c',
  postcode: '#d62728',
  gender: '#9467bd',
  Prior: '#1f77b4',
  'Final score': '#17becf',
};

type ReactiveTable = HTMLTableElement & { value: DataRecord[] };

export function createEditableRecordTable(
  initialRecords: Array<Record<(typeof columns)[number], string>>,
  tinted = false,
  document: Document = globalThis.document,
): ReactiveTable {
  const table = document.createElement('table') as ReactiveTable;
  table.className = 'editable-record-table';
  const header = table.insertRow();
  for (const column of columns) {
    const cell = document.createElement('th');
    cell.textContent = column;
    if (tinted) cell.style.backgroundColor = colorWithAlpha(colors[column], 0.35);
    header.append(cell);
  }

  for (const record of initialRecords) {
    const row = table.insertRow();
    for (const column of columns) {
      const cell = row.insertCell();
      if (tinted) cell.style.backgroundColor = colorWithAlpha(colors[column], 0.1);
      if (column === 'gender') {
        const select = document.createElement('select');
        for (const [value, label] of [['male', 'Male'], ['female', 'Female'], ['other', 'Non-binary']]) {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = label;
          option.selected = value === record[column].toLowerCase();
          select.append(option);
        }
        cell.append(select);
      } else {
        cell.contentEditable = 'true';
        cell.textContent = record[column];
      }
    }
  }

  const updateValue = () => {
    table.value = Array.from(table.rows).slice(1).map((row, index) => {
      const record: DataRecord = { uid: index + 1 };
      columns.forEach((column, columnIndex) => {
        const cell = row.cells[columnIndex];
        const select = cell.querySelector('select');
        const value = (select?.value ?? cell.textContent ?? '').trim().toLowerCase();
        record[column] = value || null;
      });
      return record;
    });
  };
  table.addEventListener('input', updateValue);
  updateValue();
  return table;
}

export function renderEstimatedProbability(
  waterfall: WaterfallRecord[],
  document: Document = globalThis.document,
): HTMLDivElement {
  const finalWeight = waterfall.at(-1)?.log2_bayes_factor ?? 0;
  const root = document.createElement('div');
  const mark = document.createElement('mark');
  mark.textContent = `The estimated probability these two records match is ${(probabilityFromMatchWeight(finalWeight) * 100).toFixed(1)}%.`;
  root.append(mark);
  return root;
}

export function renderActivatedCategories(
  waterfall: WaterfallRecord[],
  document: Document = globalThis.document,
): HTMLUListElement {
  const list = document.createElement('ul');
  waterfall.slice(1, -1).forEach((item) => {
    const entry = document.createElement('li');
    entry.style.color = colors[item.column_name] ?? '#000';
    entry.append(
      monospace(item.column_name.padEnd(12), document),
      ': ',
      monospace(`'${item.value_l}'`, document),
      ' vs ',
      monospace(`'${item.value_r}'`, document),
      ` is categorised as ${item.label_for_charts}`,
    );
    list.append(entry);
  });
  return list;
}

function monospace(text: string, document: Document): HTMLSpanElement {
  const span = document.createElement('span');
  span.style.fontFamily = 'monospace';
  span.textContent = text;
  return span;
}

export function waterfallFormula(waterfall: WaterfallRecord[]): string {
  const inputs = waterfall.slice(0, -1);
  const finalScore = waterfall.at(-1);
  const symbols = [
    String.raw`\omega_{prior}`,
    ...inputs.slice(1).map((item) => String.raw`\omega_{${item.column_name.replace('_', '\\_')}}`),
  ];
  const coloredSymbols = inputs
    .map((item, index) => colorFormulaTerm(symbols[index], colors[item.column_name]));
  const coloredTerms = inputs
    .map((item) => colorFormulaTerm(item.log2_bayes_factor.toFixed(2), colors[item.column_name]));
  const finalSymbol = colorFormulaTerm(String.raw`\omega_{final}`, colors['Final score']);
  const finalTerm = colorFormulaTerm(finalScore?.log2_bayes_factor.toFixed(2) ?? '0.00', colors['Final score']);
  return String.raw`\begin{array}{ccccccccccc}${formulaRow(coloredSymbols, finalSymbol)} \\ ${formulaRow(coloredTerms, finalTerm)}\end{array}`;
}

function colorFormulaTerm(term: string, color: string | undefined): string {
  return color ? String.raw`\color{${color}}{${term}}` : term;
}

function formulaRow(terms: string[], finalTerm: string): string {
  return terms.map((term, index) => (index === 0 ? term : String.raw` & + & ${term}`)).join('')
    + String.raw` & = & ${finalTerm}`;
}

export function probabilityFormula(waterfall: WaterfallRecord[]): string {
  const weight = waterfall.at(-1)?.log2_bayes_factor ?? 0;
  return String.raw`\large{\text{probability} = \frac{2^{\omega}}{1 + 2^{\omega}} = \frac{2^{${weight.toFixed(2)}}}{1 + 2^{${weight.toFixed(2)}}} = ${probabilityFromMatchWeight(weight).toFixed(3)}}`;
}

export function renderFormula(
  formula: string,
  document: Document = globalThis.document,
): HTMLDivElement {
  const root = document.createElement('div');
  katex.render(formula, root, { displayMode: true, throwOnError: false });
  return root;
}

export function renderDataTable(
  records: Array<Record<string, unknown>>,
  options: { roundNumbers?: boolean; tintColumns?: boolean } = {},
  document: Document = globalThis.document,
): HTMLTableElement {
  const table = document.createElement('table');
  table.className = 'record-linkage-table';
  if (records.length === 0) return table;
  const keys = Object.keys(records[0]);
  const header = table.insertRow();
  for (const key of keys) {
    const cell = document.createElement('th');
    cell.textContent = key;
    const colorKey = colorKeyForField(key);
    if (options.tintColumns && colorKey) cell.style.backgroundColor = colorWithAlpha(colors[colorKey], 0.35);
    header.append(cell);
  }
  for (const record of records) {
    const row = table.insertRow();
    for (const key of keys) {
      const cell = row.insertCell();
      const value = record[key];
      cell.textContent = typeof value === 'number' && options.roundNumbers
        ? String(roundToSignificantFigures(value, 3))
        : String(value ?? '');
      const colorKey = colorKeyForField(key);
      if (options.tintColumns && colorKey) cell.style.backgroundColor = colorWithAlpha(colors[colorKey], 0.1);
    }
  }
  return table;
}

export function renderSettingsTable(
  rows: Array<Array<string | number | null>>,
  document: Document = globalThis.document,
): HTMLTableElement {
  const [headings, ...body] = rows;
  const records = body.map((row) => Object.fromEntries(headings.map((heading, index) => [heading, row[index]])));
  const table = renderDataTable(records, { roundNumbers: true }, document);
  records.forEach((record, rowIndex) => {
    const comparison = String(record.Comparison ?? '');
    const colorKey = colorKeyForField(comparison);
    if (!colorKey) return;
    Array.from(table.rows[rowIndex + 1].cells).forEach((cell, cellIndex) => {
      cell.style.backgroundColor = colorWithAlpha(colors[colorKey], cellIndex === 0 ? 0.35 : 0.1);
    });
  });
  return table;
}

export function renderComparisonVectorTable(
  records: Array<Record<string, unknown>>,
  document: Document = globalThis.document,
): HTMLTableElement {
  const gammaKeys = Object.keys(records[0] ?? {}).filter((key) => key.startsWith('γ_'));
  const table = document.createElement('table');
  table.className = 'record-linkage-table';
  if (gammaKeys.length === 0) return table;

  const header = table.insertRow();
  gammaKeys.forEach((key) => {
    const cell = document.createElement('th');
    cell.textContent = key;
    const colorKey = colorKeyForField(key);
    if (colorKey) cell.style.backgroundColor = colorWithAlpha(colors[colorKey], 0.35);
    header.append(cell);
  });

  records.forEach((record) => {
    const row = table.insertRow();
    gammaKeys.forEach((gammaKey) => {
      const column = gammaKey.slice(2);
      const weight = Number(record[`ω_${column}`]);
      const cell = row.insertCell();
      cell.append(`γ = ${String(record[gammaKey] ?? '')} `);
      const weightLabel = document.createElement('span');
      weightLabel.className = 'comparison-vector-weight';
      weightLabel.textContent = `(ω_${column} = ${Number.isFinite(weight) ? weight.toFixed(1) : 'N/A'})`;
      const colorKey = colorKeyForField(column);
      if (colorKey) {
        cell.style.backgroundColor = colorWithAlpha(colors[colorKey], 0.1);
        weightLabel.style.color = colors[colorKey];
      }
      cell.append(weightLabel);
    });
  });
  return table;
}

export function comparisonVectorRows(
  vectors: Array<Record<string, unknown>>,
  prefixes: string[],
): Array<Record<string, unknown>> {
  return vectors.map((row) => Object.fromEntries(
    Object.entries(row).filter(([key]) => prefixes.some((prefix) => key.startsWith(prefix))),
  ));
}

export function partialMatchWeightChartRows(
  rows: PartialMatchWeightRecord[],
): PartialMatchWeightRecord[] {
  return rows;
}

function colorWithAlpha(color: string, alpha: number): string {
  const red = Number.parseInt(color.slice(1, 3), 16);
  const green = Number.parseInt(color.slice(3, 5), 16);
  const blue = Number.parseInt(color.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function colorKeyForField(field: string): string | undefined {
  const normalized = field.toLowerCase();
  if (normalized.includes('final_match_weight') || normalized.includes('match_probability')) {
    return 'Final score';
  }
  return Object.keys(colors).find((candidate) => normalized.includes(candidate.toLowerCase()));
}
