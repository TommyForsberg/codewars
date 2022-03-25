import {anagrams} from "./where-my-anagrams-at"
test('should find anagrams', () => {
   [
    ['racer', ['crazer', 'carer', 'racar', 'caers', 'racer'],['carer', 'racer']],
    ['abba', ['aabb', 'abcd', 'bbaa', 'dada'], ['aabb', 'bbaa']],
    ['laser', ['lazing', 'lazy',  'lacer'],[]]
]
    .forEach(([word, words, result]) => {
        expect(anagrams(word as string, words as string[])).toEqual(result);  

    })
      
  });