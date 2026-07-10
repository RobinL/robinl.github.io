import { describe, expect, it } from 'vitest';
import {
  createLegacyVegaEmbed,
  legacyPackageResolution,
  legacyRequire,
  legacyVegaEmbed,
  packageName,
} from './legacy-require';

describe('legacy notebook require compatibility', () => {
  it('parses scoped and unscoped package names', () => {
    expect(packageName('d3@5')).toBe('d3');
    expect(packageName('@observablehq/inputs@0.8.0')).toBe('@observablehq/inputs');
  });

  it('uses bundled modules only for bare requests', () => {
    expect(legacyPackageResolution('d3')).toEqual({ kind: 'local', name: 'd3' });
    expect(legacyPackageResolution('@observablehq/inputs')).toEqual({
      kind: 'local',
      name: '@observablehq/inputs',
    });
  });

  it('preserves explicitly requested D3 generations', () => {
    expect(legacyPackageResolution('d3@5')).toEqual({
      kind: 'cdn',
      specifier: 'd3@5.16.0',
    });
    expect(legacyPackageResolution('d3@6')).toEqual({
      kind: 'cdn',
      specifier: 'd3@6.7.0',
    });
    expect(legacyPackageResolution('d3-geo@1')).toEqual({
      kind: 'cdn',
      specifier: 'd3-geo@1.12.1',
    });
  });

  it('merges multiple modules like d3-require', async () => {
    const combined = await legacyRequire('d3-dsv', 'd3-fetch');
    expect(combined.csv).toBeTypeOf('function');
    expect(combined.csvParse).toBeTypeOf('function');
  });

  it('provides Observable-style one-argument Vega embedding', async () => {
    const calls: unknown[][] = [];
    const container = {} as HTMLDivElement;
    const embed = createLegacyVegaEmbed(
      (...args: unknown[]) => {
        calls.push(args);
        return Promise.resolve({});
      },
      () => container
    );
    const spec = { mark: 'bar' };
    const result = await embed(spec);

    expect(result).toBe(container);
    expect(calls).toEqual([[result, spec]]);
    expect(legacyVegaEmbed).toBeTypeOf('function');
    expect(legacyPackageResolution('vega-embed')).toEqual({
      kind: 'local',
      name: 'vega-embed',
    });
  });
});
