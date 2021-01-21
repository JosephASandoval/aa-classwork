// const { ids } = require("webpack")

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }
  }

  handleClick(event) {
    event.preventDefault();

    if(this.followState === "unfollowed") {
      this.followState = "followed";
      this.render();
      return $.ajax({
        method: "POST",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      })
      
    } else {
      this.followState = "unfollowed";
      this.render();
      return $.ajax({
        method: "DELETE",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      })
    }
  }
}

module.exports = FollowToggle;