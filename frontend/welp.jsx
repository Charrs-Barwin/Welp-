import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {postUser,postSession,deleteSession} from "./utils/session";
import {createNewUser,login,logout} from "./actions/session";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {session:{currentUser:window.currentUser}}
    store = configureStore(preloadedState)
    delete window.currentUser
  }
  else {
    store = configureStore()
  }
  
  window.store = store

  window.getState = store.getState; // testing!
  window.dispatch = store.dispatch; // testing!

  window.signup = postUser;
  window.login = postSession;
  window.logout = deleteSession;
  ReactDOM.render(<Root store={store} />, root);
});