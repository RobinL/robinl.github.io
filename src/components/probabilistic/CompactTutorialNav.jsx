import React from 'react';
import { tutorialArticles } from '../../lib/probabilisticLinkage.js';

export default function CompactTutorialNav({ currentSlug }) {
  const index = tutorialArticles.findIndex((article) => article.slug === currentSlug);
  if (index === -1) return null;

  const previous = tutorialArticles[index - 1];
  const next = tutorialArticles[index + 1];

  return (
    <nav className="prob-nav compact-tutorial-nav" aria-label="Adjacent tutorial articles">
      <span>
        {previous && <a href={`/${previous.slug}/`}>&larr; Previous article</a>}
      </span>
      <span>
        This is part {index + 1} of the <a href="/probabilistic_linkage/">tutorial</a>
      </span>
      <span>
        {next && <a href={`/${next.slug}/`}>Next article &rarr;</a>}
      </span>
    </nav>
  );
}
