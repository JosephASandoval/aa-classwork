// const { ids } = require("webpack")

class FollowToggle {
  constructor(el) {
    console.log('in constructor')
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
  }

  render() {
    console.log('in render')
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
      return $.ajax({
        method: "POST",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      })
      
    } else {
      this.followState = "unfollowed";
      return $.ajax({
        method: "DELETE",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      })
    }
    

  }
}

module.exports = FollowToggle;