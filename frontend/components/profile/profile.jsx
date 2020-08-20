import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import StatsContainer from '../profile/stats/stats_container';

// import JourneyContainer from '../profile/journey/journey_container';
// import SettingsContainer from '../profile/settings/settings_container';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-header">
          <ul className="profile-header-options">
            <li className="stats-header">Stats</li>
            <li className="journey-header">Journey</li>
            <li className="settings-header">Settings</li> 
          </ul>
        </div>
        <Switch>
          <Route path="/stats" component={StatsContainer} />
          <Route path="/discovery" component={StatsContainer} />
          <Route path="/settings" component={StatsContainer} />
        </Switch>
      </div>
    );
  }
}

export default Profile;