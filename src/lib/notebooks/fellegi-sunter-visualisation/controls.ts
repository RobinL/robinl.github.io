import * as Inputs from '@observablehq/inputs';
import katex from 'katex';
import type {ComparisonColumn} from './types';

type InputElement<T> = HTMLElement & {value: T};

export function createPriorControl(initialValue: number): InputElement<number> {
  return Inputs.range([0, 1], {
    label: mathLabel(String.raw`\lambda`),
    value: initialValue,
  }) as InputElement<number>;
}

export function createComparisonControl(initial: ComparisonColumn): InputElement<ComparisonColumn> {
  const outcome = Inputs.radio(['match', 'mismatch'] as const, {
    label: `Comparison of ${initial.col_name} is a:`,
    value: initial.gamma_value === 1 ? 'match' : 'mismatch',
  }) as InputElement<'match' | 'mismatch'>;
  const u0 = probabilityControl(String.raw`u_\text{${initial.col_name},level\_0}`, initial.u_probabilities[0]);
  const u1 = probabilityControl(String.raw`u_\text{${initial.col_name},level\_1}`, initial.u_probabilities[1]);
  const m0 = probabilityControl(String.raw`m_\text{${initial.col_name},level\_0}`, initial.m_probabilities[0]);
  const m1 = probabilityControl(String.raw`m_\text{${initial.col_name},level\_1}`, initial.m_probabilities[1]);

  complement(u0, u1);
  complement(u1, u0);
  complement(m0, m1);
  complement(m1, m0);

  const root = globalThis.document.createElement('div') as unknown as InputElement<ComparisonColumn>;
  root.className = 'fs-parameter-control';
  const heading = globalThis.document.createElement('h4');
  heading.textContent = `Choose value and parameters for ${initial.col_name}`;
  const grid = globalThis.document.createElement('div');
  grid.className = 'fs-parameter-grid';
  const level0 = globalThis.document.createElement('div');
  const level1 = globalThis.document.createElement('div');
  level0.append(u0, m0);
  level1.append(u1, m1);
  grid.append(level0, level1);
  root.append(heading, outcome, grid);

  Object.defineProperty(root, 'value', {
    get: (): ComparisonColumn => ({
      col_name: initial.col_name,
      gamma_value: outcome.value === 'match' ? 1 : 0,
      u_probabilities: [u0.value, u1.value],
      m_probabilities: [m0.value, m1.value],
    }),
  });
  return root;
}

function probabilityControl(label: string, value: number): InputElement<number> {
  return Inputs.range([0, 1], {label: mathLabel(label), value}) as InputElement<number>;
}

function mathLabel(expression: string): HTMLElement {
  const label = globalThis.document.createElement('span');
  katex.render(expression, label, {throwOnError: false});
  return label.removeChild(label.firstElementChild!) as HTMLElement;
}

function complement(source: InputElement<number>, target: InputElement<number>): void {
  source.addEventListener('input', () => {
    target.value = 1 - source.value;
  });
}
