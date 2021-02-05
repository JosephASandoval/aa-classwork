// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'

import { login, signup, logout } from "./util/session_api_util"



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  

  window.login = login;
  window.logout = logout;
  window.signup = signup;

  const store = configureStore();
  window.store = store;
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

});
