const View = require('./ttt-view.js');// require appropriate file
const Game = require('./game.js');// require appropriate file
// const Board = require('./board.js');

  $(() => {
    // Your code here
    const view = new View(new Game(), $('.ttt'));
    view.setupBoard();
  });
