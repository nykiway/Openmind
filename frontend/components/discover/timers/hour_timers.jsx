import React, { useState, useEffect} from 'react';

const HourTimers = ({ secondsToTime }) => {
  const [fifteenMinutes, setFifteenMinutes] = useState(900);
  const [thirtyMinutes, setThirtyMinutes] = useState(1800);
  const [hour, setHour] = useState(3600);

  const [isFifteenMinutesActive, setFifteenMinutesActive] = useState(false);
  const [isThirtyMinutesActive, setThirtyMinutesActive] = useState(false);
  const [isHourActive, setHourIsActive] = useState(false);

  const toggleTimer = (type) => {
    const bell = new Audio(
      "https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Japanese+temple+small+bell+-+Sound+effect.mp3"
    );
    switch(type) {
      case 'FifteenMinutes':
        setFifteenMinutesActive(!isFifteenMinutesActive);
        if (!isFifteenMinutesActive && fifteenMinutes === 0) bell.play(); 
        break;
      case 'ThirtyMinutes':
        setThirtyMinutesActive(!isThirtyMinutesActive);
        if (!isThirtyMinutesActive && thirtyMinutes === 0) bell.play();
        break;
      case 'Hour':
        setHourIsActive(!isHourActive);
        if (!isHourActive && hour === 0) bell.play();
        break;
      default:
        break;
    }
  }

  // Fifteen Minutes
  useEffect(() => {
    let interval = null;
    if (isFifteenMinutesActive) {
      interval = setInterval(() => {
        setFifteenMinutes(fifteenMinutes => fifteenMinutes - 1);
      }, 1000);
    } else if (!isFifteenMinutesActive && fifteenMinutes !== 900) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isFifteenMinutesActive, fifteenMinutes]);

  // Thirty Minutes
  useEffect(() => {
    let interval = null;
    if (isThirtyMinutesActive) {
      interval = setInterval(() => {
        setThirtyMinutes(thirtyMinutes => thirtyMinutes - 1);
      }, 1000);
    } else if (!isThirtyMinutesActive && thirtyMinutes !== 1800) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isThirtyMinutesActive, thirtyMinutes]);

  // Hour
  useEffect(() => {
    let interval = null;
    if (isHourActive) {
      interval = setInterval(() => {
        setHour(hour => hour - 1);
      }, 1000);
    } else if (!isHourActive && hour !== 3600) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isHourActive, hour]);

  return (
    <div className="timers-section">
      <h1 className="timer-header">15 & 30 Minute Timer or 1 Hour Timer</h1>
      <div className="timer-box">
        <div className="times-box">
        <h2 className="count-down-header">
            {secondsToTime(fifteenMinutes)}
        </h2>
        <h2 className="count-down-header">
            {secondsToTime(thirtyMinutes)}
        </h2>
        <h2 className="count-down-header">
            {secondsToTime(hour)}
        </h2>
        </div>
        <div className="timer-btns">
          <button
            className="timer-btn"
            onClick={() => toggleTimer('FifteenMinutes')}
          >
          {!isFifteenMinutesActive ? "15 Minutes" : "Pause"}
          </button>
          <button
            className="timer-btn"
            onClick={() => toggleTimer('ThirtyMinutes')}
          >
          {!isThirtyMinutesActive ? "30 Minutes" : "Pause"}
          </button>
          <button
            className="timer-btn"
            onClick={() => toggleTimer('Hour')}
          >
          {!isHourActive ? "One Hour" : "Pause"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HourTimers;