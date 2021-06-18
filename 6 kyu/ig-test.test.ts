import { iqTest } from "./iq-test";
test('should find index of differing int in eveness', () => {
    [
      ["2 4 7 8 10", 3],
      ["1 2 2", 1]
   
    ].forEach(([n1, n2]) => {
      expect(iqTest(n1 as string)).toEqual(n2);
    });
  });