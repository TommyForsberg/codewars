const players =  [{name:'Player 1', active: true, square: 0},{name: 'Player 2', active:false, square: 0}];
const movers = [{start:2,end:38}, 
    {start:8,end:31},
    {start:46,end:25},
    {start:16,end:6},
    {start:7,end:14},
    {start:15,end:26},
    {start:21,end:42},
    {start:28,end:84},
    {start:36,end:44},
    {start:49,end:11},
    {start:51,end:67},
    {start:62,end:19},
    {start:64,end:60},
    {start:71,end:91},
    {start:74,end:53},
    {start:87,end:94},
    {start:89,end:68},
    {start:92,end:88},
    {start:95,end:75},
    {start:99,end:80},
];
export function SnakesLadders() {

};

SnakesLadders.prototype.play = (die1:number, die2:number) => { 

    const activePlayer = players.find(p => p.active);
    let winner = players.find(p => p.square === 100);
    if(winner !== undefined)
    return 'Game over!'

    SetActivePlayer(players, die1===die2);

    MovePlayer(activePlayer, die1 + die2);
    
    if(activePlayer.square > 100)
      MovePlayer(activePlayer, -(activePlayer.square - 100))



return activePlayer.square === 100 ? `${activePlayer.name} Wins!`: `${activePlayer.name} is on square ${activePlayer.square}`;
}
function SetActivePlayer(players: any[], rethrow) {
    if(rethrow)
    return;

players.forEach(p => p.active = !p.active);


}

function MovePlayer(activePlayer: { name: string; active: boolean; square: number; }, steps: number) {

  const currentSquare = activePlayer.square + steps;
  var mover = movers.find(m => m.start === currentSquare);
  if(mover !== undefined)
  activePlayer.square = mover.end
  else
  activePlayer.square = currentSquare;

}
 