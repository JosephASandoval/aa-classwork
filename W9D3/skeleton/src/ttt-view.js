class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    // const $ul = $("<ul class='grid'></ul>")
    for (let i = 0; i < 8; i++) {
      const $li = $("<li></li>");
      this.$el.append($li);
    }
  }
}

module.exports = View;
