import React from "react";
import { Link } from "react-router-dom";

import ProfileNav from '../sub_navs/profile_nav';

class Stats extends React.Component {

  render() {
    return (
      <div>
        <ProfileNav />
        <div className="stats-hero">
          <h1>
            Every day is a chance to train your mind for a happier, healthier
            life.
          </h1>
          <br />
          <Link to="/discover">
            <button className="meditate-stats-button">Meditate</button>
          </Link>
          <br />
          <Link to="/journey">
            <button className="view-goals-button">View Journey</button>
          </Link>
        </div>
        <br />
        <div className="stats">
          <div className="total-time-meditated">
            <i className="fas fa-chart-pie"></i>
            <h2>Total time meditated</h2>
            <h3>Test</h3>
          </div>
          <div className="sessions-completed">
            <i className="fas fa-headphones"></i>
            <h2>Sessions Completed</h2>
            <h3>Test</h3>
          </div>
          <div className="current-run-streak">
            <i className="fas fa-stopwatch"></i>
            <h2>Current run streak</h2>
            <h3>Test</h3>
          </div>
          <div className="last-time-meditated">
            <i className="far fa-clock"></i>
            <h2>Last time meditated</h2>
            <h3>Test</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;