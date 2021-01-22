/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {


const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    }); 
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    });
  }
};



module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// const { ids } = require("webpack")
const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js")

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const followToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(() => {
  $("button.follow-toggle").each((index, button_ele) => {
    new followToggle(button_ele);
  })
})






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map