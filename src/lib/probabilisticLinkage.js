export const probLinkageCategoryOrder = ['tutorial', 'other_articles', 'tools', 'benchmarking', 'archive'];

export const probLinkageCategoryTitles = {
  tutorial: 'Introductory Interactive Tutorial',
  other_articles: 'Other articles',
  tools: 'Useful tools',
  benchmarking: 'Splink Benchmarking and Performance',
  archive: 'Archived Material',
};

export const probLinkageArticles = [
  {
    slug: 'intro_to_probabilistic_linkage',
    title: 'An Interactive Introduction to Record Linkage (Data Deduplication) in the Fellegi-Sunter framework',
    category: 'tutorial',
  },
  {
    slug: 'partial_match_weights',
    title: 'Partial match weights',
    category: 'tutorial',
  },
  {
    slug: 'm_and_u_values',
    title: 'm and u values in the Fellegi-Sunter model',
    category: 'tutorial',
  },
  {
    slug: 'maths_of_fellegi_sunter',
    title: 'The mathematics of the Fellegi Sunter model',
    category: 'tutorial',
  },
  {
    slug: 'computing_fellegi_sunter',
    title: 'Computing the Fellegi Sunter model',
    category: 'tutorial',
  },
  {
    slug: 'fellegi_sunter_accuracy',
    title: 'Why Probabilistic Linkage is More Accurate than Fuzzy Matching For Data Deduplication',
    category: 'tutorial',
  },
  {
    slug: 'em_intuition',
    title: 'The Intuition Behind the Use of Expectation Maximisation to Train Record Linkage Models',
    category: 'tutorial',
  },
  {
    slug: 'alternative_prob_random_match',
    title: 'An alternative way to think about predicted probabilities in the Fellegi Sunter model',
    category: 'tutorial',
  },
  {
    slug: 'address_matching',
    title: 'Building Accurate Address Matching Systems',
    category: 'other_articles',
  },
  {
    slug: 'fault_tolerant_trie',
    title: 'Using a fault tolerant trie for address matching',
    category: 'other_articles',
  },
  {
    slug: 'measuring_data_linking_accuracy',
    title: 'Measuring the accuracy of record linkage',
    category: 'other_articles',
  },
  {
    slug: 'connected_components',
    title: 'Connected components visualisation',
    category: 'tools',
  },
  {
    slug: 'graph_playground_iframe',
    title: 'Graph editor for illustrating clustering concepts (graph playground)',
    category: 'tools',
  },
  {
    slug: 'live_splink',
    title: 'Live DuckDB WASM Splink model',
    category: 'tools',
  },
  {
    slug: 'match_weight_calculator',
    title: 'Match weight calculator',
    category: 'tools',
  },
  {
    slug: 'posterior_treemap',
    title: 'Visualising updating a prior',
    category: 'tools',
  },
  {
    slug: 'prob_bf_mw',
    title: 'The relationship between probabilities, match weights and Bayes factors',
    category: 'tools',
  },
  {
    slug: 'visualising_fellegi_sunter',
    title: 'Visualising the Fellegi Sunter model',
    category: 'tools',
  },
  {
    slug: 'comparing_splink_models',
    title: 'Are more complex probabilistic linkage models more accurate? Part 1, supervised learning',
    category: 'benchmarking',
  },
  {
    slug: 'comparing_splink_models_unsupervised',
    title: 'Are more complex probabilistic linkage models more accurate? Part 2, unsupervised learning',
    category: 'benchmarking',
  },
  {
    slug: 'fast_deduplication',
    title: 'Super-fast deduplication of large datasets using Splink and DuckDB',
    category: 'benchmarking',
  },
  {
    slug: 'archived_maths_fellegi_sunter',
    title: 'Maths of Fellegi Sunter (old version)',
    category: 'archive',
  },
  {
    slug: 'em_algorithm_interactive',
    title: 'Unsupervised probabalistic data matching using the Expectation Maximisation algorithm',
    category: 'archive',
  },
  {
    slug: 'm_u_generator',
    title: 'm and u probability generator',
    category: 'archive',
  },
  {
    slug: 'm_u_generator_starting',
    title: 'm and u probability generator with starting values',
    category: 'archive',
  },
  {
    slug: 'match_weight_dependencies',
    title: 'Dependencies between match weights',
    category: 'archive',
  },
  {
    slug: 'understanding_match_weights',
    title: 'Understanding match weights in the Fellegi Sunter model',
    category: 'archive',
  },
];

export const tutorialArticles = probLinkageArticles.filter((article) => article.category === 'tutorial');

