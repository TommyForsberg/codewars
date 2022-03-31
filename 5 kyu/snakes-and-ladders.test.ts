import {SnakesLadders} from './snakes-and-ladders';
const game = new SnakesLadders();
test('should set player on correct square', () => {
    [
[1,1, 'Player 1 is on square 38'],
 [1,5, 'Player 1 is on square 44'],
 [6,2 , 'Player 2 is on square 31'],
 [1,1,'Player 1 is on square 25']
 ]
     .forEach(([n1,n2, result]) => {
         expect(game.play(n1,n2)).toEqual(result);  
 
     })
       
   });