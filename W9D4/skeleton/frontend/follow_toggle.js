// const { ids } = require("webpack")
const APIUtil = require('./api_util.js')

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    console.log(this.followState)
    switch (this.followState) {
      case "unfollowed":
        this.$el.text('Follow!');
        this.$el.prop("disabled", false)
        break;
      case "followed":
        this.$el.text('Unfollow!');
        this.$el.prop("disabled", false)
        break;
      case "following":
        this.$el.text('Following!')
        this.$el.prop("disabled", true);
        break;
      case "unfollowing":
        this.$el.text('Unfollowing!')
        this.$el.prop("disabled", true);
        break;
    }
  }

  handleClick(event) {
    event.preventDefault();

    if(this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      // return $.ajax({
      //   method: "POST",
      //   url: `/users/${this.userId}/follow`,
      //   dataType: "JSON"
      // })
      APIUtil.followUser(this.userId).then(() => {
        this.followState = "followed";
        this.render();
      })
 
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      // return $.ajax({
      //   method: "DELETE",
      //   url: `/users/${this.userId}/follow`,
      //   dataType: "JSON"
      // })
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = "unfollowed";
        this.render();
      })
    }
  }
}

module.exports = FollowToggle;