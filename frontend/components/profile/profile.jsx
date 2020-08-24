import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import StatsContainer from '../profile/stats/stats_container';
import ProfileNav from '../profile/profile_nav/profile_nav';
import Stats from '../profile/stats/stats'

// import JourneyContainer from '../profile/journey/journey_container';
// import SettingsContainer from '../profile/settings/settings_container';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <ProfileNav/>
        <Stats/>
        <Switch>
          <Route path="/profile/stats" component={StatsContainer} />
          <Route path="/profile/journey" component={StatsContainer} />
          <Route path="/profile/settings" component={StatsContainer} />
        </Switch>
      </div>
    );
  }
}

export default Profile;