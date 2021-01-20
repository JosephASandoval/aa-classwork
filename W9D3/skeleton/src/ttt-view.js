class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul class='grid'></ul>")
    for (let i = 0; i < 8; i++) {
      const $li = $("<li></li>");
      $ul.append($li);
    }
  }
}

module.exports = View;
