const followToggle = require("./follow_toggle.js");
const usersSearch = require("./users_search.js");

$(() => {
  $("button.follow-toggle").each((index, button_ele) => {
    new followToggle(button_ele);
  })
  $("nav.users-search").each((index, search_ele) => {
    new usersSearch(search_ele);
  })
})





