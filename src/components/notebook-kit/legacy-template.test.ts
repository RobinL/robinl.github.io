// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { legacyHtml } from './legacy-template';

describe('Observable 1.0 template compatibility', () => {
  it('interprets interpolated strings as markup', () => {
    const link = '<a href="https://example.com">link</a>';
    const table = legacyHtml`<table><tr><td>${link}</td></tr></table>`;

    expect(table.querySelector('a')?.textContent).toBe('link');
    expect(table.textContent).not.toContain('<a href');
  });

  it('preserves interpolated DOM nodes', () => {
    const strong = document.createElement('strong');
    strong.textContent = 'important';
    const paragraph = legacyHtml`<p>${strong}</p>`;

    expect(paragraph.firstElementChild).toBe(strong);
  });
});
