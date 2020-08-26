import React from "react";
import DiscoverNav from '../profile/sub_navs/discover_nav';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentMeditation;
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
            <form>
              <input
                type="text"
                className="search-form"
                placeholder="ie. sleep, anxiety, etc..."
              />
            </form>
          </div>
          <div className="meditations-box">
            <ul className="meditations-list">
              {this.props.meditations.map((meditation) => (
                <li className="meditation-name" key={meditation.id}>
                  <button
                    onClick={() => this.handleClick(meditation.id)}
                    className="single-meditation"
                  >
                    {meditation.name}
                    <br />
                    <div className="index-meditation">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-headphones fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Discover;
