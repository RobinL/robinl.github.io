export const valueTypes = [
  'Match Weight',
  'Probability (e.g., 0.5 for 50%)',
  'Bayes Factor',
  'Reciprocal Bayes Factor',
] as const;

export type ValueType = (typeof valueTypes)[number];

export type MatchWeightCalculation = {
  matchWeight: number;
  probability: number;
  bayesFactor: number;
  formattedMatchWeight: string;
  formattedProbability: string;
  formattedBayesFactor: string;
  relativeInterpretation: string;
  absoluteInterpretation: string;
};

export function probabilityToBayesFactor(probability: number): number {
  if (probability === 1) return Infinity;
  if (probability === 0) return 0;
  return probability / (1 - probability);
}

export function bayesFactorToProbability(bayesFactor: number): number {
  return bayesFactor / (1 + bayesFactor);
}

export function matchWeightToBayesFactor(matchWeight: number): number {
  return 2 ** matchWeight;
}

export function bayesFactorToMatchWeight(bayesFactor: number): number {
  return Math.log2(bayesFactor);
}

function interpretBayesFactor(bayesFactor: number): string {
  const multiple = bayesFactor > 1 ? bayesFactor : bayesFactor < 1 ? 1 / bayesFactor : 1;
  const formattedMultiple = multiple < 100 ? multiple.toFixed(2) : multiple.toFixed(0);

  if (bayesFactor > 1) return `${formattedMultiple} times more likely`;
  if (bayesFactor < 1) return `${formattedMultiple} times less likely`;
  return 'no more or less likely';
}

export function calculateMatchWeight(value: number, valueType: ValueType): MatchWeightCalculation {
  let probability: number;
  let bayesFactor: number;
  let matchWeight: number;

  switch (valueType) {
    case 'Probability (e.g., 0.5 for 50%)':
      probability = value;
      bayesFactor = probabilityToBayesFactor(value);
      matchWeight = bayesFactorToMatchWeight(bayesFactor);
      break;
    case 'Bayes Factor':
      bayesFactor = value;
      probability = bayesFactorToProbability(value);
      matchWeight = bayesFactorToMatchWeight(value);
      break;
    case 'Reciprocal Bayes Factor':
      bayesFactor = 1 / value;
      probability = bayesFactorToProbability(bayesFactor);
      matchWeight = bayesFactorToMatchWeight(bayesFactor);
      break;
    case 'Match Weight':
      matchWeight = value;
      bayesFactor = matchWeightToBayesFactor(value);
      probability = bayesFactorToProbability(bayesFactor);
      break;
  }

  const maximumFractionDigits = Math.max(5, Math.round(Math.abs(matchWeight) / 2));
  const absoluteInterpretation = 1 / (1 - probability);

  return {
    matchWeight,
    probability,
    bayesFactor,
    formattedMatchWeight: matchWeight.toFixed(2),
    formattedProbability: probability.toLocaleString(undefined, {
      maximumFractionDigits,
    }),
    formattedBayesFactor: bayesFactor.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    }),
    relativeInterpretation: interpretBayesFactor(bayesFactor),
    absoluteInterpretation: absoluteInterpretation.toLocaleString(undefined, {
      maximumFractionDigits: absoluteInterpretation < 2 ? 5 : 2,
    }),
  };
}

export function renderMatchWeightCalculation(
  calculation: MatchWeightCalculation,
  document: Document = globalThis.document
): HTMLDivElement {
  const root = document.createElement('div');
  const rows = [
    ['Match Weight', calculation.formattedMatchWeight],
    ['Probability', calculation.formattedProbability],
    ['Bayes Factor', calculation.formattedBayesFactor],
    ['Relative interpretation', calculation.relativeInterpretation],
    ['Absolute interpretation', `One error in each ${calculation.absoluteInterpretation} predictions`],
  ];

  for (const [label, value] of rows) {
    const paragraph = root.appendChild(document.createElement('p'));
    const strong = paragraph.appendChild(document.createElement('strong'));
    strong.textContent = `${label}:`;
    paragraph.append(` ${value}`);
  }

  return root;
}
