import {describe, expect, it} from 'vitest';
import {buildReverseTrie} from './fault-tolerant-trie';

describe('buildReverseTrie', () => {
  it('accepts the address objects emitted by the interactive notebook', () => {
    const trie = buildReverseTrie([
      {uprn: 1, address: '1 HIGH STREET'},
      {uprn: 2, address: '2 HIGH STREET'},
    ]);

    expect(trie.cnt).toBe(2);
    expect(trie.children.get('STREET').children.get('HIGH').children.get('1').uprn).toBe(1);
  });
});
