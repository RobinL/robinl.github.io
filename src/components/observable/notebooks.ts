type NotebookModule = {
  default?: unknown;
};

type NotebookLoader = () => Promise<NotebookModule | unknown>;

export const notebooks = {
  '86fc30325e4106c4': () => import('@robinl/86fc30325e4106c4'),
  'bf-prior-calc': () => import('@robinl/bf-prior-calc'),
  'bird-song-quiz': () => import('@robinl/bird-song-quiz'),
  'birdsong-recordings': () => import('@robinl/birdsong-recordings'),
  'computing-the-fellegi-sunter-model': () => import('@robinl/computing-the-fellegi-sunter-model'),
  'dependencies-between-match-weights': () => import('@robinl/dependencies-between-match-weights'),
  'energy-usage-and-goods-imports-and-exports': () =>
    import('@robinl/energy-usage-and-goods-imports-and-exports'),
  'energy-usage-calculator-for-everyday-activities': () =>
    import('@robinl/energy-usage-calculator-for-everyday-activities'),
  'my-flights': () => import('@robinl/my-flights'),
  'fault-tolerant-trie': () => import('@robinl/fault-tolerant-trie'),
  'filling-the-country-with-solar-panels': () =>
    import('@robinl/filling-the-country-with-solar-panels'),
  'flight-distance-calculator': () => import('@robinl/flight-distance-calculator'),
  'how-much-should-carbon-offsetting-cost': () =>
    import('@robinl/how-much-should-carbon-offsetting-cost'),
  'interactive-bayes-factor-probability-and-match-weight': () =>
    import('@robinl/interactive-bayes-factor-probability-and-match-weight'),
  'interactive-blogging-with-observable-notebooks-and-gatsb': () =>
    import('@robinl/interactive-blogging-with-observable-notebooks-and-gatsb'),
  'intro-prob-linkage': () => import('@robinl/intro-prob-linkage'),
  'm-and-u-probability-generator': () => import('@robinl/m-and-u-probability-generator'),
  'm-and-u-probability-generator-with-starting-values': () =>
    import('@robinl/m-and-u-probability-generator-with-starting-values'),
  'partial-match-weights': () => import('@robinl/partial-match-weights'),
  'probability-match-weight-bayes-factor-converter': () =>
    import('@robinl/probability-match-weight-bayes-factor-converter'),
  'spark-explain': () => import('@robinl/spark-explain'),
  'the-carbon-impact-of-switiching-to-an-electric-car': () =>
    import('@robinl/the-carbon-impact-of-switiching-to-an-electric-car'),
  'unsupervised-probabalistic-data-matching-using-the-expec': () =>
    import('@robinl/unsupervised-probabalistic-data-matching-using-the-expec'),
  'updating-a-prior-simplified': () => import('@robinl/updating-a-prior-simplified'),
  'understanding-match-weights': () => import('@robinl/understanding-match-weights'),
  'understanding-the-spark-ui-by-example-sorting-data': () =>
    import('@robinl/understanding-the-spark-ui-by-example-sorting-data'),
  'understanding-the-spark-ui-by-example-the-left-join': () =>
    import('@robinl/understanding-the-spark-ui-by-example-the-left-join'),
  'visualising-fellegi-sunter': () => import('@robinl/visualising-fellegi-sunter'),
} satisfies Record<string, NotebookLoader>;

export type NotebookName = keyof typeof notebooks;

export async function loadNotebook(name: string) {
  const loader = notebooks[name as NotebookName];
  if (!loader) {
    throw new Error(`Unknown Observable notebook: ${name}`);
  }

  const mod = await loader();
  if (mod && typeof mod === 'object' && 'default' in mod) {
    return (mod as NotebookModule).default ?? mod;
  }

  return mod;
}
