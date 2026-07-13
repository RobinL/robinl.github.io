export type ComparisonColumn = {
  col_name: 'fname' | 'sname' | 'dob' | 'town';
  m_probabilities: [number, number];
  u_probabilities: [number, number];
  gamma_value: 0 | 1;
};

export type VisualisationSettings = {
  proportion_of_matches: number;
  comparison_columns: ComparisonColumn[];
};

export type ExampleRow = Record<string, string | number>;

export type TreemapDatum = {
  name: string;
  name_list: string[];
  prob_list: number[];
  prob: number;
  colour: string;
  value?: number;
  children?: TreemapDatum[];
};
