import {describe, expect, it} from 'vitest';
import {runtimeCellNames} from './runtime-cell-names';

describe('runtimeCellNames', () => {
  it('maps legacy singular outputs to their mounted names', () => {
    expect(runtimeCellNames({output: 'viewof$bird'})).toEqual(['viewof bird']);
    expect(runtimeCellNames({output: 'mutable$score'})).toEqual(['mutable score']);
  });

  it('includes declarations exported by native JavaScript cells', () => {
    expect(runtimeCellNames({outputs: ['title']})).toEqual(['title']);
    expect(runtimeCellNames({outputs: ['root', 'my_interface']})).toEqual([
      'root',
      'my_interface',
    ]);
  });
});
