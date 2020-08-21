import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../profile/profile_nav/profile_nav";

class Settings extends React.Component {
  render() {
    return (
      <div>
        <ProfileNav/>
        <h1>This is the settings component</h1>
        <div className="meditations-area">

        </div>
      </div>
    );
  }
}

export default Settings;
