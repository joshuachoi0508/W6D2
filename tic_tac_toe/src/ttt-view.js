class View {
  constructor(game, $el) {
    this.game = game;
    this.grid = $el;
    this.bindEvents();
  }

  bindEvents() {
    (this.grid).on("click", (el) => {
      let $square = $(el.target);
      this.game.playMove($square.data('grid'));
      this.makeMove($square);
    });
  }

  makeMove($square) {

    if (this.game.currentPlayer === 'x') {
      $square.css('background-image', 'url(https://media.tenor.com/images/22bdca75648d345c07d03a470dde74a7/tenor.gif)').css('background-size', '95px');
    } else {
      $square.css('background-image', 'url(https://66.media.tumblr.com/8055750f108cf97734f557269f22133b/tumblr_olom1ps6je1uf6f29o1_400.gif)').css('background-size', '95px');
    }

    if (this.game.isOver()){
      debugger;
      alert("Lana Wins");
    }
  }

  setupBoard() {
    let $board = $('<ul></ul>');
    $board.addClass('board');
    $('.ttt').append($board);

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let $sq = $('<li></li>');
        $sq.addClass('square');
        $sq.data('grid', [i, j]);
        $board.append($sq);
      }
    }
  }
}

module.exports = View;
