import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../profile/profile_nav/profile_nav';
import MeditationItem from './meditation_item';
import { openModal } from '../../actions/modal_actions'

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMeditations();
  }
  render () {
    if (this.props.meditations !== undefined) {
      return (
        <div>
          <div>
            <ProfileNav />
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
                  <Link
                    onClick={() => openModal('meditation')}
                    className="single-meditation"
                    to={`/meditations/${meditation.id}`}
                  >
                    {meditation.name} <br />
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fas fa-headphones fa-stack-1x fa-inverse"></i>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
  } else {
    return (
      <div>

      </div>
    )
  }
}
}

export default Discover;
