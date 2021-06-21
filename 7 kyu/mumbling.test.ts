import { accum } from "./mumbling";

test('Basic tests', () => {
  [
    ["ZpglnRxqenU", "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"],
    // ["ATTGC", "TAACG"],
    // ["GTAT", "CATA"],
  ].forEach(([s1, s2]) => {
    expect(accum(s1)).toEqual(s2);
  });
});