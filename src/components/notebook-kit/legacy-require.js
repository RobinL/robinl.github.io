import * as d3 from 'd3';
import { require as cdnRequire } from 'd3-require';
import * as Inputs from '@observablehq/inputs';
import vegaEmbed from 'vega-embed';

export function createLegacyVegaEmbed(embed, createContainer = () => document.createElement('div')) {
  return function legacyVegaEmbed(...args) {
    if (args.length !== 1) return embed(...args);

    const container = createContainer();
    return Promise.resolve(embed(container, args[0])).then(() => container);
  };
}

export const legacyVegaEmbed = createLegacyVegaEmbed(vegaEmbed);

const pinnedLegacyPackages = {
  alasql: 'alasql@4.6.6',
  'fast-levenshtein': 'fast-levenshtein@2.0.6',
  'jaro-winkler': 'jaro-winkler@0.2.8',
  jquery: 'jquery@3.7.1',
  topojson: 'topojson@3.0.2',
  'vega-embed': 'vega-embed@6.22.2',
};

const pinnedLegacyRequests = {
  'd3@5': 'd3@5.16.0',
  'd3@6': 'd3@6.7.0',
  'd3-format@1': 'd3-format@1.4.5',
  'd3-geo@1': 'd3-geo@1.12.1',
  'htl@0.2': 'htl@0.2.0',
  'topojson-client@3': 'topojson-client@3.1.0',
  'vega-embed@6': 'vega-embed@6.22.2',
};

const localModules = {
  '@observablehq/inputs': Inputs,
  d3,
  'vega-embed': legacyVegaEmbed,
};

export function packageName(specifier) {
  if (specifier.startsWith('@')) {
    return specifier.match(/^(@[^/]+\/[^@/]+)/)?.[1] ?? specifier;
  }
  return specifier.split('@', 1)[0];
}

function hasExplicitVersion(specifier, name) {
  return specifier.slice(name.length).startsWith('@');
}

export function legacyPackageResolution(specifier) {
  const name = packageName(specifier);
  const localName = name === 'd3' || name.startsWith('d3-') ? 'd3' : name;

  // A bare request can use the modern dependency already bundled by Astro.
  // An explicitly versioned request is a compatibility constraint and must
  // not be silently upgraded; this matters for removed APIs such as d3.mouse.
  if (!hasExplicitVersion(specifier, name) && localModules[localName]) {
    return { kind: 'local', name: localName };
  }

  return {
    kind: 'cdn',
    specifier:
      pinnedLegacyRequests[specifier] ??
      (hasExplicitVersion(specifier, name)
        ? specifier
        : (pinnedLegacyPackages[name] ?? specifier)),
  };
}

async function resolveLegacyPackage(specifier) {
  const resolution = legacyPackageResolution(specifier);
  return resolution.kind === 'local'
    ? localModules[resolution.name]
    : cdnRequire(resolution.specifier);
}

export async function legacyRequire(...specifiers) {
  const modules = await Promise.all(specifiers.map(resolveLegacyPackage));
  if (modules.length === 1) return modules[0];

  // d3-require merges the named exports of multiple requested modules. Some
  // recovered notebooks rely on this for require("d3-dsv", "d3-fetch").
  return Object.assign({}, ...modules);
}
