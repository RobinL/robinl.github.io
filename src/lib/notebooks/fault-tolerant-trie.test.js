import { describe, expect, it } from 'vitest';
import { buildAddressTrie, buildReverseTrie } from './fault-tolerant-trie';

describe('buildReverseTrie', () => {
  it('accepts the address objects emitted by the interactive notebook', () => {
    const trie = buildReverseTrie([
      { uprn: 1, address: '1 HIGH STREET' },
      { uprn: 2, address: '2 HIGH STREET' },
    ]);

    expect(trie.cnt).toBe(2);
    expect(trie.children.get('STREET').children.get('HIGH').children.get('1').uprn).toBe(1);
  });
});

describe('buildAddressTrie', () => {
  it('builds a separate trie branch for each line from the textarea', () => {
    const trie = buildAddressTrie('1 HIGH STREET WESTMINSTER\n2 HIGH STREET WESTMINSTER');
    const highStreet = trie.children.get('WESTMINSTER').children.get('STREET').children.get('HIGH');

    expect(trie.cnt).toBe(2);
    expect([...highStreet.children.keys()]).toEqual(['1', '2']);
    expect(highStreet.children.get('1').uprn).toBe(1);
    expect(highStreet.children.get('2').uprn).toBe(2);
  });
});
