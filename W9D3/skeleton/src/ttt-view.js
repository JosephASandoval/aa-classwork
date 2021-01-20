class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
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
      this.$el.append($li);
    }
  }
}

module.exports = View;
