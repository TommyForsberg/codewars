import {beeramid} from './beeramid';

test('should return beercan pyramid levels', () => {
    [
[9,2, 1],
 [1,1, 1],
[10,2, 2],
[11,2, 2],
[21,1.5, 3],
[454,5, 5],
[455,5, 6],
[4,4, 1],
[3,4, 0],
[0,4, 0],
[-1,4, 0],
 ]
     .forEach(([bonus,price, result]) => {
         expect(beeramid(bonus,price)).toEqual(result);   
     })
       
   });