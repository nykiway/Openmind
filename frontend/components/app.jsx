import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';

import Modal from './discover/meditate/meditation_modal';

import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from './session_form/signup_form_container';

// Profile
import Stats from './profile/stats/stats';
import ListsContainer from './profile/lists/lists_container';
import SettingsContainer from './profile/settings/settings_container';

// Discover:
import JourneyContainer from './discover/journey/journey_container';
import Timers from './discover/timers/timers';
import Discover from './discover/meditate/discover';

// Error Page
import ErrorPage from './error_pages/404';

import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
      <NavBarContainer />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/logout" component={Home}/>

        <ProtectedRoute path="/discover" component={Discover} />


        <ProtectedRoute path="/journey" component={JourneyContainer} />
        <ProtectedRoute path="/timers" component={Timers} />

        <ProtectedRoute path="/stats" component={Stats} />
        <ProtectedRoute path="/lists" component={ListsContainer} />
        <ProtectedRoute path="/settings" component={SettingsContainer} />
        <Route component={ErrorPage}/>

      </Switch>
      <Footer />
  </div>
);

export default App;
