declare module 'jaro-winkler' {
  export default function distance(left: string, right: string): number;
}

declare module 'fast-levenshtein' {
  const levenshtein: {
    get(left: string, right: string): number;
  };
  export default levenshtein;
}
