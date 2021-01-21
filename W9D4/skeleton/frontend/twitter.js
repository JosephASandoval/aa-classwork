const followToggle = require("./follow_toggle.js");

$(() => {
  $("button.follow-toggle").each((index, button_ele) => {
    new followToggle(button_ele);
  })
})





