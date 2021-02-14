import React from "react";
import DiscoverNav from '../../profile/sub_navs/discover_nav';
import UnlimitedTimer from './unlimited_timer';
import MinuteTimers from './minute_timers';
import HourTimers from './hour_timers'

const Timers = () => {

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let formattedMinutes =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    
    let formattedHours =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    if (secs <= 3540) return formattedMinutes;
    if (secs > 3540) return formattedHours;
  }

    return (
      <div>
        <DiscoverNav />
        <div className="nav-wrapper">
          <div className="nav-timer"></div>
        </div>
        <div className="timers-section">
          <img
            src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/smiles.jpg"
            alt="timers hero image"
          />
          <UnlimitedTimer secondsToTime={secondsToTime} />
          <MinuteTimers secondsToTime={secondsToTime} />
          <HourTimers secondsToTime={secondsToTime} />
        </div>
      </div>
    );
  }

export default Timers;
