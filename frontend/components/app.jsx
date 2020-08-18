import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import LogInFormContainer from "./session_form/login_form_container";
// import SignUpFormContainer from './session_form/signup_form';
// import GreetingContainer from './greeting/greeting_container';

// import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Openmind</h1>
      </Link>
    </header>
      <Route path="/login" component={LogInFormContainer} />
  </div>
);

export default App;
