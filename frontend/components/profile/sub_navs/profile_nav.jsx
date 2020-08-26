import React from "react";
import { Link } from "react-router-dom";

class ProfileNav extends React.Component {
  render() {
    return (
      <div className="profile-header">
        <ul className="profile-header-options">
          <Link to="/stats">
            <li className="stats-header">Stats</li>
          </Link>
          <Link to="/lists">
            <li className="lists-header">Lists</li>
          </Link>
          <Link to="/settings">
            <li className="settings-header">Settings</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default ProfileNav;
