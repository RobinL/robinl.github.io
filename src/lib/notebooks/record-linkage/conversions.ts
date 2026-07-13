export function roundToSignificantFigures(value: number, significantFigures: number): number {
  if (value === 0) return 0;
  const magnitude = Math.floor(Math.log10(Math.abs(value)));
  const factor = 10 ** (significantFigures - magnitude - 1);
  return Math.round(value * factor) / factor;
}

export function bayesFactorFromMatchWeight(matchWeight: number): number {
  return 2 ** matchWeight;
}

export function probabilityFromMatchWeight(matchWeight: number): number {
  const bayesFactor = bayesFactorFromMatchWeight(matchWeight);
  return bayesFactor / (1 + bayesFactor);
}

export function bayesFactorFromProbability(probability: number): number {
  return probability / (1 - probability);
}

export function matchWeightFromBayesFactor(bayesFactor: number): number {
  return Math.log2(bayesFactor);
}

export function matchWeightFromProbability(probability: number): number {
  return matchWeightFromBayesFactor(bayesFactorFromProbability(probability));
}

export function bayesFactorFromMandU(mProbability: number, uProbability: number): number {
  return mProbability / uProbability;
}
