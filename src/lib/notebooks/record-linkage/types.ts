export type RecordValue = string | null;
export type DataRecord = Record<string, RecordValue | number>;
export type ComparisonVector = Record<string, RecordValue | number>;

export type ComparisonLevel = {
  sql_condition: string;
  label_for_charts: string;
  is_null_level?: boolean;
  m_probability?: number;
  u_probability?: number;
  comparison_vector_value?: number | null;
};

export type Comparison = {
  output_column_name: string;
  comparison_levels: ComparisonLevel[];
  comparison_description: string;
};

export type ModelSettings = {
  link_type: string;
  comparisons: Comparison[];
  probability_two_random_records_match: number;
  [key: string]: unknown;
};

export type WaterfallRecord = {
  column_name: string;
  label_for_charts: string;
  sql_condition: string | null;
  log2_bayes_factor: number;
  bayes_factor: number;
  comparison_vector_value: number | null;
  m_probability: number | null;
  u_probability: number | null;
  bayes_factor_description: string | null;
  value_l: RecordValue;
  value_r: RecordValue;
  term_frequency_adjustment: boolean | null;
  bar_sort_order: number;
  bar_is_active?: boolean;
};

export type PartialMatchWeightRecord = {
  comparison_name: string;
  sql_condition: string;
  label_for_charts: string;
  m_probability: number;
  u_probability: number;
  comparison_vector_value: number;
  probability_two_random_records_match: number;
  log2_bayes_factor: number;
  bar_is_active?: boolean;
};
