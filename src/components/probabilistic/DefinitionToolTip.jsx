import React from 'react';

const definitions = {
  activate:
    "A scenario is activated when its conditions are met for the pairwise record comparison at hand.",
  blocking_rule:
    'A blocking rule is a criterion used to reduce the number of record pair comparisons by only comparing records that meet certain conditions.',
  'fellegi-sunter':
    "Fellegi and Sunter's 1969 paper set out a statistical model for record linkage that was feasible to compute.",
  partial_match_weight:
    'A partial match weight quantifies the importance of a piece of information, or scenario, in the Fellegi-Sunter model.',
  prior:
    'The prior is the probability that two records picked at random from the input data refer to the same entity.',
  scenario:
    'A scenario defines a category of similarity for a subset of information in the input records, often a column.',
  tf_adjustment:
    'Term-frequency adjustments account for skew in linking variable distributions, such as some first names being much more common than others.',
};

export default function DefinitionToolTip({ term, text }) {
  const definition = definitions[term] ?? 'Term not found';
  const displayText = text || term;

  return (
    <span className="definition-term" tabIndex={0}>
      <span className="definition-label">{displayText}</span>
      <span className="definition-tooltip" role="tooltip">
        {definition}
      </span>
    </span>
  );
}

