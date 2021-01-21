const { ids } = require("webpack")

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
  }

  render() {
    if (this.followState === "unfollowed") {
      return "Follow!"
    } else {
      return "Unfollow!"
    }
  }

  handleClick() {

    el.preventDefault();
    

  }
}

module.exports = FollowToggle;