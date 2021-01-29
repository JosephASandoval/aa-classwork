import React from "react";
// import ReactDOM from "react-dom";
import configureStore from "./store/store.js"
import { receiveTodos, receiveTodo, removeTodo} from "./actions/todo_actions.js"


document.addEventListener ("DOMContentLoaded", () => {
  console.log("todo_redux");
  const root = document.getElementById("container")
  // ReactDOM.render (<Root />, root)

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;

  window.store = configureStore();

});



function Root() {
  return (
    <h1>Todo's App</h1>
  )
}

