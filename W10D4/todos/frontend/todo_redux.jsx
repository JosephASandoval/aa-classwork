import React from "react";
// import ReactDOM from "react-dom";
import configureStore from "./store/store.js"

document.addEventListener ("DOMContentLoaded", () => {
  const root = document.getElementById("container")
  // ReactDOM.render (<Root />, root)

  window.store = configureStore();

});



function Root() {
  return (
    <h1>Todo's App</h1>
  )
}

