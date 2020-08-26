import React from "react";
import { Link } from "react-router-dom";

class DiscoverNav extends React.Component {
  render() {
    return (
      <div className="profile-header">
        <ul className="profile-header-options">
          <Link to="/journey">
            <li className="stats-header">Journey</li>
          </Link>
          <Link to="/discover">
            <li className="journey-header">Discover</li>
          </Link>
          <Link to="/timers">
            <li className="settings-header">Timers</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default DiscoverNav;
