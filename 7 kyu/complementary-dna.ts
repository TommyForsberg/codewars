
export const DNAStrand = (dna: string) => {
  const map = { A: 'T', T: 'A', G: 'C', C: 'G' };

  const str = dna.replace(/A|T|G|C/gi, function(matched){
    return map[matched];
  });
  return str;
}