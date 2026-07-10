import { describe, expect, it } from 'vitest';
import { compileNotebook } from './vite-plugin';

describe('compileNotebook', () => {
  it('compiles standard notebook cells into an ESM definition module', () => {
    const module = compileNotebook(`<!doctype html>
      <notebook>
        <title>Example</title>
        <script id="1" type="module">
          import * as Inputs from "@observablehq/inputs";
          const value = view(Inputs.range([0, 10]));
        </script>
        <script id="2" type="module">value * 2</script>
      </notebook>`);

    expect(module).toContain('title: "Example"');
    expect(module).toContain('id: 1');
    expect(module).toContain('inputs: ["view"]');
    expect(module).toContain('outputs: ["Inputs","value"]');
    expect(module).toContain('import("@observablehq/inputs")');
    expect(module).not.toContain('cdn.jsdelivr.net');
  });
});
