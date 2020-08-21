import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../profile/profile_nav/profile_nav";

class Journey extends React.Component {
  render() {
    return (
      <div>
        <ProfileNav/>
        <h1>This is the journey component</h1>
      </div>
    );
  }
}

export default Journey;
