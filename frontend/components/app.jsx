import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
// import logo from "../../app/assets/images/openmind.jpg";

import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar';
// import GreetingContainer from './greeting/greeting_container';

// import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
    <NavBarContainer/>
    </header>
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
