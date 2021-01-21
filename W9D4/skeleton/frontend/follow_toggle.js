const { ids } = require("webpack")

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
  }

  render() {
    if (this.followState === "unfollowed") {
      return "Follow!"
    }
  }
}

module.exports = FollowToggle;