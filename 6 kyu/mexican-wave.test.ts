import { wave } from "./mexican-wave";
test('should return array of words', () => {
    [
      ["wave", ['Wave','wAve','waVe','wavE']],
      [" two waves ", [' Two waves ', ' tWo waves ', ' twO waves ', ' two Waves ', ' two wAves ', ' two waVes ', ' two wavEs ', ' two waveS ']]
   
    ].forEach(([n1, n2]) => {
      expect(wave(n1 as string)).toEqual(n2);
    });
  });