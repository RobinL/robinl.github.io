import type { ComparisonFunction } from './comparisons';
import {
  bayesFactorFromMandU,
  matchWeightFromBayesFactor,
  matchWeightFromProbability,
} from './conversions';
import type {
  ComparisonVector,
  DataRecord,
  ModelSettings,
  PartialMatchWeightRecord,
  WaterfallRecord,
} from './types';

export function addComparisonVectorValues(settings: ModelSettings): ModelSettings {
  return {
    ...settings,
    comparisons: settings.comparisons.map((comparison) => {
      let vectorValue = comparison.comparison_levels.filter((level) => !level.is_null_level).length - 1;
      return {
        ...comparison,
        comparison_levels: comparison.comparison_levels.map((level) => ({
          ...level,
          comparison_vector_value: level.is_null_level ? null : vectorValue--,
        })),
      };
    }),
  };
}

export function createComparisonRows(
  records: DataRecord[],
  columns = Object.keys(records[0] ?? {}).filter((key) => key !== 'uid'),
): ComparisonVector[] {
  const output: ComparisonVector[] = [];
  for (let leftIndex = 0; leftIndex < records.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < records.length; rightIndex += 1) {
      output.push(createPair(records[leftIndex], records[rightIndex], columns));
    }
  }
  return output;
}

export function createLinkedComparisonRows(
  leftRecords: DataRecord[],
  rightRecords: DataRecord[],
  columns = Object.keys(leftRecords[0] ?? {}).filter((key) => key !== 'uid'),
): ComparisonVector[] {
  return leftRecords.flatMap((left) => rightRecords.map((right) => createPair(left, right, columns)));
}

function createPair(left: DataRecord, right: DataRecord, columns: string[]): ComparisonVector {
  const pair: ComparisonVector = {uid_l: Number(left.uid), uid_r: Number(right.uid)};
  for (const column of columns) {
    pair[`${column}_l`] = left[column];
    pair[`${column}_r`] = right[column];
  }
  return pair;
}

export function applyComparisonFunctions(
  rows: ComparisonVector[],
  functions: Record<string, ComparisonFunction>,
): ComparisonVector[] {
  return rows.map((row) => {
    const output: ComparisonVector = {...row};
    for (const [column, comparison] of Object.entries(functions)) {
      output[`γ_${column}`] = comparison(row[`${column}_l`], row[`${column}_r`]);
    }
    return output;
  });
}

export function settingsToPartialMatchWeightsData(
  settings: ModelSettings,
): PartialMatchWeightRecord[] {
  const settingsWithValues = addComparisonVectorValues(settings);
  const output: PartialMatchWeightRecord[] = [{
    comparison_name: 'probability_two_random_records_match',
    sql_condition: '',
    label_for_charts: '',
    m_probability: 0,
    u_probability: 0,
    comparison_vector_value: 0,
    probability_two_random_records_match: settings.probability_two_random_records_match,
    log2_bayes_factor: matchWeightFromProbability(settings.probability_two_random_records_match),
  }];

  for (const comparison of settingsWithValues.comparisons) {
    for (const level of comparison.comparison_levels) {
      if (level.is_null_level) continue;
      const mProbability = level.m_probability ?? 0;
      const uProbability = level.u_probability ?? 0;
      output.push({
        comparison_name: comparison.output_column_name,
        sql_condition: level.sql_condition,
        label_for_charts: level.label_for_charts,
        m_probability: mProbability,
        u_probability: uProbability,
        comparison_vector_value: level.comparison_vector_value ?? 0,
        probability_two_random_records_match: settings.probability_two_random_records_match,
        log2_bayes_factor: matchWeightFromBayesFactor(
          bayesFactorFromMandU(mProbability, uProbability),
        ),
      });
    }
  }
  return output;
}

export function setActivePartialMatchWeights(
  chartData: PartialMatchWeightRecord[],
  vector: ComparisonVector,
): PartialMatchWeightRecord[] {
  return chartData.map((item) => ({
    ...item,
    bar_is_active: item.comparison_name === 'probability_two_random_records_match'
      || vector[`γ_${item.comparison_name}`] === item.comparison_vector_value,
  }));
}

export function settingsToWaterfall(
  settings: ModelSettings,
  vector: ComparisonVector,
): WaterfallRecord[] {
  const settingsWithValues = addComparisonVectorValues(settings);
  const priorBayesFactor = bayesFactorFromMandU(
    settings.probability_two_random_records_match,
    1 - settings.probability_two_random_records_match,
  );
  const output: WaterfallRecord[] = [waterfallRecord({
    column_name: 'Prior',
    label_for_charts: 'Starting match weight (prior)',
    log2_bayes_factor: matchWeightFromBayesFactor(priorBayesFactor),
    bayes_factor: priorBayesFactor,
    bar_sort_order: 0,
  })];

  settingsWithValues.comparisons.forEach((comparison, index) => {
    const column = comparison.output_column_name;
    const vectorValue = Number(vector[`γ_${column}`]);
    const level = comparison.comparison_levels.find(
      (candidate) => candidate.comparison_vector_value === vectorValue,
    );
    if (!level) return;
    const mProbability = level.m_probability ?? 0;
    const uProbability = level.u_probability ?? 0;
    const bayesFactor = bayesFactorFromMandU(mProbability, uProbability);
    output.push(waterfallRecord({
      column_name: column,
      label_for_charts: level.label_for_charts,
      sql_condition: level.sql_condition,
      log2_bayes_factor: matchWeightFromBayesFactor(bayesFactor),
      bayes_factor: bayesFactor,
      comparison_vector_value: vectorValue,
      m_probability: mProbability,
      u_probability: uProbability,
      bayes_factor_description: `If comparison level is \`${level.label_for_charts}\` then comparison is ${bayesFactor.toFixed(2)} times more likely to be a match`,
      value_l: String(vector[`${column}_l`] ?? ''),
      value_r: String(vector[`${column}_r`] ?? ''),
      term_frequency_adjustment: false,
      bar_sort_order: index + 1,
    }));
  });

  const total = output.reduce((sum, record) => sum + record.log2_bayes_factor, 0);
  output.push(waterfallRecord({
    column_name: 'Final score',
    label_for_charts: 'Final score',
    log2_bayes_factor: total,
    bayes_factor: 2 ** total,
    bar_sort_order: output.length,
  }));
  return output;
}

function waterfallRecord(
  values: Pick<WaterfallRecord, 'column_name' | 'label_for_charts' | 'log2_bayes_factor' | 'bayes_factor' | 'bar_sort_order'>
    & Partial<WaterfallRecord>,
): WaterfallRecord {
  return {
    sql_condition: null,
    comparison_vector_value: null,
    m_probability: null,
    u_probability: null,
    bayes_factor_description: null,
    value_l: '',
    value_r: '',
    term_frequency_adjustment: null,
    ...values,
  };
}

export function addModelParametersToComparisonVectors(
  vectors: ComparisonVector[],
  settings: ModelSettings,
): Array<Record<string, unknown>> {
  const settingsWithValues = addComparisonVectorValues(settings);
  const priorWeight = matchWeightFromProbability(settings.probability_two_random_records_match);
  return vectors.map((vector) => {
    const output: Record<string, unknown> = {uid_l: vector.uid_l, uid_r: vector.uid_r};
    let finalWeight = priorWeight;
    for (const comparison of settingsWithValues.comparisons) {
      const column = comparison.output_column_name;
      const gamma = Number(vector[`γ_${column}`]);
      const level = comparison.comparison_levels.find(
        (candidate) => candidate.comparison_vector_value === gamma,
      );
      output[`${column}_l`] = vector[`${column}_l`];
      output[`${column}_r`] = vector[`${column}_r`];
      output[`γ_${column}`] = gamma;
      if (!level?.m_probability || !level.u_probability) continue;
      const bayesFactor = bayesFactorFromMandU(level.m_probability, level.u_probability);
      const weight = matchWeightFromBayesFactor(bayesFactor);
      output[`m_${column}`] = level.m_probability;
      output[`u_${column}`] = level.u_probability;
      output[`bf_${column}`] = bayesFactor;
      output[`ω_${column}`] = weight;
      finalWeight += weight;
    }
    output.ω_prior = priorWeight;
    output.ω_final_match_weight = finalWeight;
    return output;
  });
}

export function settingsTable(settings: ModelSettings): Array<Array<string | number | null>> {
  const rows: Array<Array<string | number | null>> = [[
    'Column', 'Scenario', 'Comparison Vector Value (γ)', 'M Prob', 'U Prob', 'Bayes Factor', 'Partial Match Weight (ω)',
  ]];
  for (const comparison of addComparisonVectorValues(settings).comparisons) {
    for (const level of comparison.comparison_levels) {
      if (level.is_null_level) continue;
      const bayesFactor = bayesFactorFromMandU(level.m_probability ?? 0, level.u_probability ?? 0);
      rows.push([
        comparison.output_column_name,
        level.label_for_charts,
        level.comparison_vector_value ?? null,
        level.m_probability ?? 'N/A',
        level.u_probability ?? 'N/A',
        bayesFactor,
        matchWeightFromBayesFactor(bayesFactor),
      ]);
    }
  }
  return rows;
}
