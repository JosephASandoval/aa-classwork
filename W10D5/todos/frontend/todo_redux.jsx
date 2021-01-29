import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js"
import { receiveTodos, receiveTodo, removeTodo} from "./actions/todo_actions.js"
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions.js"
import Root from "./components/root.jsx";



document.addEventListener ("DOMContentLoaded", () => {
  const store = configureStore();

  const root = document.getElementById("container")
  ReactDOM.render (<Root store={store} />, root)

  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;

  window.store = configureStore();

});
