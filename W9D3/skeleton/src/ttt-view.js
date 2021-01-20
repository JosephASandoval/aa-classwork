class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      const pos = e.currentTarget.data('pos');
      this.game.playmove(pos);
      const $square = $(e.currentTarget);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    
  }

  setupBoard() {
    // const $ul = $("<ul class='grid'></ul>")
    for (let i = 0; i < 9; i++) {
      const $li = $("<li></li>");
      const pos = ([i / 3, i % 3]);
      $li.data("pos", pos);
      this.$el.append($li);
    }
  }
}

    // for (let i = 0; i < 3; i++) {
    //   for (let i = 0; i < 3; i++) {
      


module.exports = View;
