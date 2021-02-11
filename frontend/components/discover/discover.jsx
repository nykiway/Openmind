import React from "react";
import { connect } from 'react-redux';
import DiscoverNav from '../profile/sub_navs/discover_nav';
import DiscoverSearch from '../discover/search/discover_search';

const Discover = ({ currentMeditation, meditations }) => {
    if (!currentMeditation) return null;
    if (meditations !== undefined) {
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
              meditations={meditations}
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

const mapStateToProps = (state) => {
  return {
    meditations: Object.values(state.entities.meditations),
    currentMeditation: state.ui.currentMeditation,
  }
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);