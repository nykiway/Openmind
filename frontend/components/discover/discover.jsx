import React from "react";
import DiscoverNav from '../profile/sub_navs/discover_nav';
import DiscoverSearch from '../discover/search/discover_search';

class Discover extends React.Component {
  render () {
    let { currentMeditation } = this.props;
    if (!currentMeditation) return null;

    if (this.props.meditations !== undefined) {
      return (
        <div>
          <div>
            <DiscoverNav />
            <div className="nav-wrapper">
              <div className="nav-discover"></div>
            </div>
          </div>
          <div className="discover-hero">
            <img
              className="discover-hero-image"
              src={
                "https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/yellow_sun.jpg"
              }
            />
          </div>
          <div className="search-form-box">
            <DiscoverSearch
              meditations={this.props.meditations}
              />
          </div>

          <img
            className="sun-image"
            src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/transparent_sun.svg"
            alt="transparent-sun"
          />
        </div>
      );
    }
  }
}

export default Discover;
