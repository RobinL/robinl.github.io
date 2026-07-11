declare module 'vega-lite-api' {
  export function register(vega: unknown, vegaLite: unknown, options?: unknown): any;
}

declare module 'topojson-client' {
  export function feature(topology: unknown, object: unknown): unknown;
  export function mesh(topology: unknown, object?: unknown, filter?: unknown): unknown;
}
