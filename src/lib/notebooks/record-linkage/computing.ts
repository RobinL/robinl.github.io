import { tutorialComparisonFunctions } from './comparisons';
import { probabilityFromMatchWeight } from './conversions';
import {
  addModelParametersToComparisonVectors,
  applyComparisonFunctions,
  createLinkedComparisonRows,
  settingsTable,
} from './model';
import { tutorialSettings } from './settings';
import type { DataRecord } from './types';

export function computeLinkageTutorial(left: DataRecord[], right: DataRecord[]) {
  const comparisonPairs = createLinkedComparisonRows(left, right);
  const vectors = applyComparisonFunctions(comparisonPairs, tutorialComparisonFunctions);
  const scored = addModelParametersToComparisonVectors(vectors, tutorialSettings);
  return {
    comparisonPairs: withoutKeys(comparisonPairs, ['uid_l', 'uid_r']),
    vectors: withoutKeys(vectors, ['uid_l', 'uid_r']),
    vectorValues: selectPrefixes(vectors, ['γ_']),
    gammaAndWeights: scored.map((row) => {
      const selected = Object.fromEntries(Object.entries(row).filter(([key]) => key.startsWith('γ_')));
      selected.ω_prior = row.ω_prior;
      Object.assign(selected, Object.fromEntries(Object.entries(row).filter(([key]) => key.startsWith('ω_') && key !== 'ω_prior')));
      return selected;
    }),
    finalScores: scored.map((row) => {
      const finalWeight = Number(row.ω_final_match_weight);
      return {
        match_probability: probabilityFromMatchWeight(finalWeight),
        ω_final_match_weight: finalWeight,
        ...Object.fromEntries(Object.entries(row).filter(([key]) =>
          (key.endsWith('_l') || key.endsWith('_r')) && !key.startsWith('uid_'))),
      };
    }),
    lookupRows: settingsTable(tutorialSettings),
  };
}

function withoutKeys(rows: Array<Record<string, unknown>>, keys: string[]) {
  return rows.map((row) => Object.fromEntries(Object.entries(row).filter(([key]) => !keys.includes(key))));
}

function selectPrefixes(rows: Array<Record<string, unknown>>, prefixes: string[]) {
  return rows.map((row) => Object.fromEntries(
    Object.entries(row).filter(([key]) => prefixes.some((prefix) => key.startsWith(prefix))),
  ));
}
