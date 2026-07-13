import levenshtein from 'fast-levenshtein';
import jaroWinklerDistance from 'jaro-winkler';

export type ComparisonFunction = (left: unknown, right: unknown) => number;

export function jaroWinklerComparison(left: unknown, right: unknown): number {
  if (left === null || right === null) return -1;
  const leftString = String(left);
  const rightString = String(right);
  if (leftString === rightString) return 2;
  return jaroWinklerDistance(leftString, rightString) <= 0.9 ? 0 : 1;
}

export function exactMatchComparison(left: unknown, right: unknown): number {
  if (left === null || right === null) return -1;
  return left === right ? 1 : 0;
}

export function levenshteinComparison(left: unknown, right: unknown): number {
  if (left === null || right === null) return -1;
  const leftString = String(left);
  const rightString = String(right);
  if (leftString === rightString) return 2;
  return levenshtein.get(leftString, rightString) <= 1 ? 1 : 0;
}

export const tutorialComparisonFunctions: Record<string, ComparisonFunction> = {
  first_name: jaroWinklerComparison,
  surname: jaroWinklerComparison,
  postcode: levenshteinComparison,
  gender: exactMatchComparison,
};
