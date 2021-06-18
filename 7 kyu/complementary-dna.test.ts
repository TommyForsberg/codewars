import { DNAStrand} from './complementary-dna';

test('should map g => c, c => g, a => t, t => a', () => {
  [
    ["AAAA", "TTTT"],
    ["ATTGC", "TAACG"],
    ["GTAT", "CATA"],
  ].forEach(([n1, n2]) => {
    expect(DNAStrand(n1!)).toEqual(n2!);
  });
});
