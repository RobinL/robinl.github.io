import type { CompiledNotebook } from '../../lib/notebook-kit/types';

type NotebookModule = {
  default: CompiledNotebook;
};

type NotebookLoader = () => Promise<NotebookModule>;

const notebooks = {
  '86fc30325e4106c4': () =>
    import('../../notebooks/migrated/86fc30325e4106c4/86fc30325e4106c4@851.notebook.html'),
  'bf-prior-calc': () =>
    import('../../notebooks/bf-prior-calc.notebook.html'),
  'bird-song-quiz': () =>
    import('../../notebooks/bird-quiz.notebook.html'),
  'birdsong-recordings': () =>
    import('../../notebooks/birdsong.notebook.html'),
  'computing-the-fellegi-sunter-model': () =>
    import('../../notebooks/computing-fellegi-sunter.notebook.html'),
  'dependencies-between-match-weights': () =>
    import('../../notebooks/match-weight-dependencies.notebook.html'),
  'energy-usage': () => import('../../notebooks/energy-usage.notebook.html'),
  'energy-usage-and-goods-imports-and-exports': () =>
    import('../../notebooks/country-energy.notebook.html'),
  'fault-tolerant-trie': () =>
    import('../../notebooks/fault-tolerant-trie.notebook.html'),
  'filling-the-country-with-solar-panels': () =>
    import('../../notebooks/fill-country-solar.notebook.html'),
  'flight-distance-calculator': () =>
    import('../../notebooks/flight-distance.notebook.html'),
  'how-much-should-carbon-offsetting-cost': () =>
    import('../../notebooks/offsetting-renewables.notebook.html'),
  'interactive-bayes-factor-probability-and-match-weight': () =>
    import('../../notebooks/probability-conversions.notebook.html'),
  'interactive-blogging-with-observable-notebooks-and-gatsb': () =>
    import('../../notebooks/interactive-blogging.notebook.html'),
  'intro-prob-linkage': () =>
    import('../../notebooks/intro-prob-linkage.notebook.html'),
  'm-and-u-probability-generator': () =>
    import('../../notebooks/m-u-generator.notebook.html'),
  'm-and-u-probability-generator-with-starting-values': () =>
    import('../../notebooks/m-u-generator-starting.notebook.html'),
  'match-weight-calculator': () =>
    import('../../notebooks/match-weight-calculator.notebook.html'),
  'my-flights': () =>
    import('../../notebooks/my-flights.notebook.html'),
  'partial-match-weights': () =>
    import('../../notebooks/partial-match-weights.notebook.html'),
  'spark-explain': () =>
    import('../../notebooks/spark-explain.notebook.html'),
  'the-carbon-impact-of-switiching-to-an-electric-car': () =>
    import(
      '../../notebooks/migrated/the-carbon-impact-of-switiching-to-an-electric-car/a74844ec61541eb4@1053.notebook.html'
    ),
  'understanding-match-weights': () =>
    import(
      '../../notebooks/migrated/understanding-match-weights/94c3728fad39c9e8@644.notebook.html'
    ),
  'understanding-the-spark-ui-by-example-sorting-data': () =>
    import('../../notebooks/spark-sort.notebook.html'),
  'understanding-the-spark-ui-by-example-the-left-join': () =>
    import('../../notebooks/spark-left-join.notebook.html'),
  'unsupervised-probabalistic-data-matching-using-the-expec': () =>
    import(
      '../../notebooks/migrated/unsupervised-probabalistic-data-matching-using-the-expec/20c8b34dc8ac7754@1041.notebook.html'
    ),
  'updating-a-prior-simplified': () =>
    import('../../notebooks/posterior-treemap.notebook.html'),
  'visualising-fellegi-sunter': () =>
    import('../../notebooks/visualising-fellegi-sunter.notebook.html'),
} satisfies Record<string, NotebookLoader>;

export type NotebookName = keyof typeof notebooks;

export async function loadNotebook(name: string): Promise<CompiledNotebook> {
  const loader = notebooks[name as NotebookName];
  if (!loader) throw new Error(`Unknown Notebook Kit notebook: ${name}`);
  return (await loader()).default;
}
