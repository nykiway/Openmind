import React from "react";
import DiscoverNav from '../../profile/sub_navs/discover_nav'

class Journey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DiscoverNav />
        <img
          className="journey-hero"
          src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/winking_sun.jpg?versionId=null"
          alt="journey-hero"
        />
        <div className="journey-div">
          <h1 className="meditation-history">Meditation History</h1>
          <br />
          <div className="journey-content">
            <div className="journey-item">
              <h1 className="journey-name">Name of Meditation</h1>
              <h2 className="journey-categories">Journey Categories</h2>
            </div>
            <ul className="journey-icons">
              <li>
                <i id="journey-play" className="fas fa-play journey-icon-play"></i>
              </li>
              <li>
                <i className="fas fa-star journey-icon-star"></i>
              </li>
              <li>
                <i className="fas fa-plus journey-icon-plus"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Journey;
