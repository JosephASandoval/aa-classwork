import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js"
import { receiveTodos, receiveTodo, removeTodo} from "./actions/todo_actions.js"
import { receiveSteps, receiveStep, removeStep } from "./actions/step_actions.js"
import Root from "./components/root.jsx";
import allTodos from "./reducers/selectors"
import { fetchTodos } from "./util/todo_api_util"



document.addEventListener ("DOMContentLoaded", () => {
  const store = configureStore();

  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store} />, root)

  window.allTodos = allTodos;

  window.fetchTodos = fetchTodos;

  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;

  window.store = configureStore();

});
