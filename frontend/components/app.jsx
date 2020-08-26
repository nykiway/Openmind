import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';

import Modal from './modal/modal';

import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from './session_form/signup_form_container';

import ProfileContainer from './profile/profile_container';
import StatsContainer from './profile/stats/stats_container';

import DiscoverContainer from './discover/discover_container'

import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    < Modal />
    <header>
      <NavBarContainer />
    </header>
    <div className="body">
      <Switch>
      <Route path="/home" component={HomeContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      <Route path="/discover" component={DiscoverContainer} />
      <Route path="/meditations/:meditationId" component={Modal} />

      <Route path="/profile" component={ProfileContainer} />
      <Route path="/stats" component={StatsContainer} />
      <Redirect to="/home"/>
      </Switch>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
