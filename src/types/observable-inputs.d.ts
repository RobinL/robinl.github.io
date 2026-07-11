declare module '@observablehq/inputs' {
  export type Input<T> = HTMLElement & {value: T};

  export function range(
    extent?: [number, number],
    options?: {label?: string; value?: number; step?: number; width?: number | string},
  ): Input<number>;

  export function number(
    extent?: [number, number],
    options?: {label?: string; value?: number; step?: number; width?: number | string},
  ): Input<number>;

  export function radio<T extends string>(
    values: readonly T[],
    options?: {label?: string; value?: T; format?: (value: T) => string},
  ): Input<T>;

  export function form<T extends Record<string, Input<unknown>>>(
    inputs: T,
  ): Input<{[Key in keyof T]: T[Key]['value']}>;
}
