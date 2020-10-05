import React from "react";
import DiscoverNav from '../profile/sub_navs/discover_nav';
import DiscoverSearch from '../discover/search/discover_search';

class Discover extends React.Component {
  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeditations();
  }

  handleClick(meditationId) {
    this.props.openModal('meditation');
    this.props.fetchCurrentMeditation(meditationId);
  }
  
  render () {
    let { currentMeditation } = this.props;
    if (!currentMeditation) return null;

    if (this.props.meditations !== undefined) {
      return (
        <div>
          <div>
            <DiscoverNav />
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


          <div className="meditations-container">
            <ul className="meditations-list">
              {this.props.meditations.map((meditation) => (
                <li className="meditation-item" key={meditation.id}>
                  <button onClick={() => this.handleClick(meditation.id)} >
                    <p className="meditation-name">{meditation.name}</p>
                    <div className="meditation-circle">
                      <i className="fas fa-headphones"/>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
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
