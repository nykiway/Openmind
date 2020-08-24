import React from 'react';
import { Link } from 'react-router-dom'
import ProfileNav from "../profile/profile_nav/profile_nav";

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayModal() {
    if (this.state) {
      return null;
    }
  }

  render() {
      return (
        <div>
          <ProfileNav/>
          <h1>I am the meditation!</h1>
        </div>
      )
  }
}

export default MeditationItem;