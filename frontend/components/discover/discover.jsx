import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../profile/profile_nav/profile_nav';
import MeditationItem from './meditation_item';

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
            <h1>This is the discover component</h1>
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
                <li className="meditation-name">
                  <Link
                    className="single-meditation"
                    key={meditation.id}
                    to={`/meditations/${meditation.id}`}
                  >
                    {meditation.name} <br />
                    <i class="fas fa-circle"></i>
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
