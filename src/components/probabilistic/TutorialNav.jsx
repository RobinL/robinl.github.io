import React from 'react';
import { tutorialArticles } from '../../lib/probabilisticLinkage.js';

export default function TutorialNav({ currentSlug }) {
  return (
    <nav className="prob-nav tutorial-nav" aria-label="Probabilistic linkage tutorial navigation">
      <div className="prob-nav-title">
        <a href="/probabilistic_linkage/">Probabilistic Linkage Tutorial Navigation:</a>
      </div>
      <ol>
        {tutorialArticles.map((article) => (
          <li key={article.slug}>
            {article.slug === currentSlug ? (
              <strong>{article.title}</strong>
            ) : (
              <a href={`/${article.slug}/`}>{article.title}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

