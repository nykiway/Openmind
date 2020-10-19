import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';

import Modal from './modal/modal';

import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from './session_form/signup_form_container';

// Profile
import StatsContainer from './profile/stats/stats_container';
import ListsContainer from './profile/lists/lists_container';
import SettingsContainer from './profile/settings/settings_container';

// Discover:
import JourneyContainer from './discover/journey/journey_container';
import TimersContainer from './discover/timers/timers_container';
import DiscoverContainer from './discover/discover_container';

// Error Page
import ErrorPage from './error_pages/404';

import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
      <NavBarContainer />
      <Switch>
        
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        <ProtectedRoute path="/discover" component={DiscoverContainer} />

        <Route path="/home" component={HomeContainer} />

        <ProtectedRoute path="/journey" component={JourneyContainer} />
        <ProtectedRoute path="/timers" component={TimersContainer} />

        <ProtectedRoute path="/stats" component={StatsContainer} />
        <ProtectedRoute path="/lists" component={ListsContainer} />
        <ProtectedRoute path="/settings" component={SettingsContainer} />

        <AuthRoute path="/" component={ErrorPage}/>
      </Switch>
      <Footer />
  </div>
);

export default App;
