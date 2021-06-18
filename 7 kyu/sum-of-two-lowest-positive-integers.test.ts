import { sumTwoSmallestNumbers} from './sum-of-two-lowest-positive-integers';

test('should return sum of two lowest integers', () => {
  [
    [[5, 8, 12, 19, 22], 13 ], [[3, 87, 45, 12, 7], 10], [[23, 71, 33, 82, 1], 24], [[52, 76, 14, 12, 4], 16]  

  ].forEach(([n1, n2]) => expect(sumTwoSmallestNumbers(n1 as number[])).toBe(n2!));
});