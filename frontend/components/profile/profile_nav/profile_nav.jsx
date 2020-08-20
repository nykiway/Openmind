import React from "react";
import { Link } from "react-router-dom";

class ProfileNav extends React.Component {
  render() {
    return (
      <div className="profile-header">
        <ul className="profile-header-options">
          <li className="stats-header">Stats</li>
          <li className="journey-header">Journey</li>
          <li className="settings-header">Settings</li>
        </ul>
      </div>
    );
  }
}

export default ProfileNav;
