import {describe, expect, it} from 'vitest';
import {runtimeCellNames} from './runtime-cell-names';

describe('runtimeCellNames', () => {
  it('includes the singular output of an expression cell', () => {
    expect(runtimeCellNames({output: 'answer'})).toEqual(['answer']);
  });

  it('includes declarations exported by native JavaScript cells', () => {
    expect(runtimeCellNames({outputs: ['title']})).toEqual(['title']);
    expect(runtimeCellNames({outputs: ['root', 'my_interface']})).toEqual([
      'root',
      'my_interface',
    ]);
  });
});
