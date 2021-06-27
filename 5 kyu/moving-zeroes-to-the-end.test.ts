import {moveZeros} from "./moving-zeroes-to-the-end"
test('should move zeros last', () => {
   
      expect(JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1]))).toEqual(JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));
   
  });