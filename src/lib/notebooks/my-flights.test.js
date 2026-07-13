import {JSDOM} from 'jsdom';
import {describe, expect, it} from 'vitest';
import {flightsBlurb, flightsTitle} from './my-flights';

describe('my flights notebook', () => {
  it('initialises with the locally supported jet-fuel conversion', () => {
    const document = new JSDOM().window.document;
    expect(flightsTitle(document).textContent).toMatch(/years of flights$/);
    expect(flightsBlurb(document).textContent).toContain('tonnes of co2');
  });
});
