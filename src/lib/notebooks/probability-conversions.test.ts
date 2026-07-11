import {createHash} from 'node:crypto';
import {JSDOM} from 'jsdom';
import {describe, expect, it, vi} from 'vitest';
import originalSpec from './probability-conversions-spec.json';
import {conversionChartData, getOriginalConversionSpec, renderConversionFormula} from './probability-conversions';

describe('probability conversion visualisation', () => {
  it('keeps the exact published Vega-Lite specification', () => {
    expect(createHash('sha256').update(JSON.stringify(originalSpec)).digest('hex'))
      .toBe('16439ac1c40dd8fe13d4a7796269bf5e34339ef7a3cffa496e36a898af4d3e4c');
    const spec = getOriginalConversionSpec(10, 990);
    expect(spec.vconcat.map((view) => view.width)).toEqual([800, 800, 800, 800]);
    expect(spec.datasets.mydata).toHaveLength(101);
  });

  it('preserves the original selected-value labels', () => {
    const zero = conversionChartData(10).find((datum) => datum.mw === 0)!;
    expect(zero).toMatchObject({prob_fmt: '0.5', bf_fmt: '1', mw_fmt: '0', int_fmt: 'no more or less likely'});
  });

  it('renders the conversion expressions as the original inline KaTeX', () => {
    const document = new JSDOM().window.document;
    vi.stubGlobal('document', document);
    try {
      const formula = renderConversionFormula(2, 'bf_1', document);
      expect(formula.textContent).toContain('K=2ω=22=4');
      expect(formula.querySelector('.katex-display')).toBeNull();
      document.body.append(formula);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
