import type {ComparisonColumn, VisualisationSettings} from './types';

export const initialPrior = 0.3;

export const initialColumns: ComparisonColumn[] = [
  {col_name: 'fname', gamma_value: 1, m_probabilities: [0.3, 0.7], u_probabilities: [0.75, 0.25]},
  {col_name: 'sname', gamma_value: 0, m_probabilities: [0.2, 0.8], u_probabilities: [0.85, 0.15]},
  {col_name: 'dob', gamma_value: 1, m_probabilities: [0.2, 0.8], u_probabilities: [0.8, 0.2]},
  {col_name: 'town', gamma_value: 1, m_probabilities: [0.3, 0.7], u_probabilities: [0.9, 0.1]},
];

export function createSettings(
  prior: number,
  columns: ComparisonColumn[],
): VisualisationSettings {
  return {
    proportion_of_matches: prior,
    comparison_columns: columns.map((column) => ({...column})),
  };
}
