import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-header">
          <ul className="profile-header-options">
            <li className="stats-header">Stats</li>
            <li className="journey-header">Journey</li>
            <li className="settings-header">Settings</li>
          </ul>
        </div>
        <div className="stats-hero">
          <h1>
            {" "}
            Every day is a chance to train your mind for a happier, healthier
            life.
          </h1>
          <br />
          <button className="meditate-stats-button">Meditate</button>
          <br />
          <button className="view-goals-button">View Goals</button>
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

export default Profile;