// React
import React from 'react';
import ReactDOM from 'react-dom';

import {login, logout, signup, } from './util/session_api_util';
import { fetchMeditations, fetchMeditation } from './actions/meditation_actions'

// Components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // start testing
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchMeditations = fetchMeditations;
  window.fetchMeditation = fetchMeditation;
  // end testing

  ReactDOM.render(<Root store={store}/>, root);
});