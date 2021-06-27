import {duplicateEncode} from './duplicate-encoder'
test('should encode single to ( and duplicate to )', () => {
    [
      ["din","((("],
      ["recede", "()()()"],
      ["Success",")())())"]
   
    ].forEach(([s1, s2]) => {
      expect(duplicateEncode(s1)).toEqual(s2);
    });
  });