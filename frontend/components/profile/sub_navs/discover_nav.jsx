import React from "react";
import { Link } from "react-router-dom";

class DiscoverNav extends React.Component {
  render() {
    return (
      <div className="profile-header">
        <ul className="profile-header-options">
          <Link to="/journey">
            <li className="journey-header">Journey</li>
          </Link>
          <Link to="/discover">
            <li className="discover-header">Discover</li>
          </Link>
          <Link to="/timers">
            <li className="timers-header">Timers</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default DiscoverNav;
