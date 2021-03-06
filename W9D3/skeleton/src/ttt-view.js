class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      // const pos = e.currentTarget.data('pos');
      // // debugger
      // this.game.playmove(pos);
      const $square = $(e.currentTarget);
      this.makeMove($square);
      // $square.toggleClass("clicked")
    })
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const mark = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.text(mark);
    $square.addClass("clicked");
    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game_over");
      const winner = this.game.winner();
      if (winner) {
        this.$el.addClass(`winner is ${winner}`)
      }
    }
  }

  setupBoard() {
    // const $ul = $("<ul class='grid'></ul>")
    // for (let i = 0; i < 9; i++) {
    //   const $li = $("<li></li>");
    //   const pos = [i / 3, i % 3];
    //   $li.data("pos", pos);
    //   this.$el.append($li);
    // }
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $("<li></li>");
        const pos = [row, col];
        $li.data("pos", pos);
        this.$el.append($li);
      }
    }
  }  
}


      


module.exports = View;
