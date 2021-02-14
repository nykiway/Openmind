import React, { useState, useEffect } from 'react';

const MinuteTimers = ({ secondsToTime }) => {
  // State for Timer Increments
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(60);
  const [fiveMinutes, setFiveMinutes] = useState(300);
  const [tenMinutes, setTenMinutes] = useState(600);

  // State for Active Timers
  const [isSecondsActive, setIsSecondsActive] = useState(false);
  const [isMinuteActive, setIsMinuteActive] = useState(false);
  const [isFiveMinutesActive, setIsFiveMinutesActive] = useState(false);
  const [isTenMinutesActive, setIsTenMinutesActive] = useState(false);
  
  const toggleTimer = (type) => {
    const bell = new Audio(
      "https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Japanese+temple+small+bell+-+Sound+effect.mp3"
    );
    switch(type) {
      case 'OneMinute':
        setIsMinuteActive(!isMinuteActive);
        if (!isMinuteActive && minute === 0) bell.play(); 
        break;
      case 'FiveMinutes':
        setIsFiveMinutesActive(!isFiveMinutesActive);
        if (!isFiveMinutesActive && fiveMinutes === 0) bell.play();
        break;
      case 'TenMinutes':
        setIsTenMinutesActive(!isTenMinutesActive);
        if (!isTenMinutesActive && tenMinutes === 0) bell.play();
        break;
      default:
        break;
    }
  }

  // minute
  useEffect(() => {
    let interval = null;
    if (isMinuteActive) {
      interval = setInterval(() => {
        setMinute(minute => minute - 1);
      }, 1000);
    } else if (!isMinuteActive && minute !== 60) {
      clearInterval(interval);
    } 
    if (minute <= 0) {
      clearInterval(interval)
      endTimer('OneMinute')
    }
    return () => {
      clearInterval(interval)
    }
  }, [isMinuteActive, minute]);

  // Five Minutes
  useEffect(() => {
    let interval = null;
    if (isFiveMinutesActive) {
      interval = setInterval(() => {
        setFiveMinutes(fiveMinutes => fiveMinutes - 1);
      }, 1000);
    } else if (!isFiveMinutesActive && fiveMinutes !== 300) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isFiveMinutesActive, fiveMinutes]);

  // Ten Minutes
  useEffect(() => {
    let interval = null;
    if (isTenMinutesActive) {
      interval = setInterval(() => {
        setTenMinutes(tenMinutes => tenMinutes - 1);
      }, 1000);
    } else if (!isTenMinutesActive && tenMinutes !== 600) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isTenMinutesActive, tenMinutes]);
  
  return (
    <div className="timers-section">
      <h1 className="timer-header">1, 5 & 10 Minute Timers</h1>
      <div className="timer-box">
        <div className="times-box">
          <h2 className="count-down-header">
            {secondsToTime(minute)}
          </h2>
          <h2 className="count-down-header">
            {secondsToTime(fiveMinutes)}
          </h2>
          <h2 className="count-down-header">
            {secondsToTime(tenMinutes)}
          </h2>
        </div>
        <div className="timer-btns">
          <button
            className="timer-btn"
            onClick={() => toggleTimer('OneMinute')}
          >
            {!isMinuteActive ? "One Minute" : "Pause"}
          </button>
          <button
            className="timer-btn"
            type='FiveMinutes'
            onClick={() => toggleTimer('FiveMinutes')}
          >
            {!isFiveMinutesActive ? "Five Minutes" : "Pause"}
          </button>
          <button
            className="timer-btn"
            type='TenMinutes'
            onClick={() => toggleTimer('TenMinutes')}
          >
            {!isTenMinutesActive ? "Ten Minutes" : "Pause"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MinuteTimers;