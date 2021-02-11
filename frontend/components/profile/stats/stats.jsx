import React, {useState} from "react";
import { Link } from "react-router-dom";
import ls from 'local-storage';

import ProfileNav from '../sub_navs/profile_nav';

const Stats = ({}) => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastTimeMeditated, setLastTimeMeditated] = useState("never");

  useEffect(() => {
    return () => {
    }
  }, [])

  const onChange = (e) => {
    localStorage.setItem('totalTimeStorage', e.target.value);
    setTotalTime(e.target.value)
  }

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
          <div className="stat">
            <i className="fas fa-chart-pie"></i>
            <h2>Total time meditated</h2>
            {/* <h3>{this.state.totalTime}</h3> */}
          </div>
          <div className="stat">
            <i className="fas fa-headphones"></i>
            <h2>Sessions Completed</h2>
            {/* <h3>{this.state.totalSessions}</h3> */}
          </div>
          <div className="stat">
            <i className="fas fa-stopwatch"></i>
            <h2>Current run streak</h2>
            {/* <h3>{this.state.currentStreak}</h3> */}
          </div>
          <div className="stat">
            <i className="far fa-clock"></i>
            <h2>Last time meditated</h2>
            {/* <h3>{this.state.lastTime}</h3> */}
          </div>
        </div>
      </div>
    );
}

export default Stats;