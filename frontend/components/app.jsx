import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import DiscoverContainer from './discover/discover_container'
import HomeContainer from './home/home_container';
import FooterContainer from './footer/footer_container';

const App = () => (
  <div>
    <header>
    <NavBarContainer/>
    </header>
    <Route exact path="/"> // why doesn't this render?
      <Redirect path="/home" component={HomeContainer} />
    </Route>
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/discover" component={DiscoverContainer} />
    <Route path="/profile" component={ProfileContainer} />
    
    <FooterContainer/>
  </div>
);

export default App;
