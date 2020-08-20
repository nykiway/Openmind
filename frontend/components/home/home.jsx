import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <img className="hero" src={window.heroURL} alt="logo" />
          <div className="hero-content">
          <h1>Meditation made simple</h1>
          <br />
          <p>
            Take the first step on your journey towards a healthier, happier
            life. Learn to meditate with Openmind.
          </p>
          <br />
          <div className="buttons">
            <Link to="/signup">
              <button className="home-signup-button" type="submit">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* come back and add these photos later */}
        <div className="features-section">
          <img className="mindful-approach" src="" alt=""/>
          <img className="loves-science" src="" alt=""/>
          <img className="many-meditators" src="" alt=""/>
        </div>
        <div className="closer-image">
          <img className="sun-image" src="" alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;
