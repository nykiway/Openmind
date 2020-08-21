import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../profile/profile_nav/profile_nav';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMeditations();
  }
  
  render () {
    const { meditations } = this.props;

    return (
      <div>
        <div>
          <ProfileNav />
        </div>
        <div className="discover-hero">
          <h1>This is the discover component</h1>
        </div>
        <div className="meditations-box">
          <ul className="meditations-list">
            {`${meditations.name}`}
          </ul>
        </div>
      </div>
    );
  }
}

export default Discover;
