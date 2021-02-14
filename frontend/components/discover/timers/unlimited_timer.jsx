import React, { useState, useEffect } from 'react';

const UnlimitedTimer = ({ secondsToTime }) => {
    const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true)
  }

  const endTimer = () => {
    setIsActive(false)
    let bell = new Audio(
      "https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Japanese+temple+small+bell+-+Sound+effect.mp3"
    );

    bell.play();
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, seconds]);

  return (
    <div className="timers-section">
      <h1 className="timer-header">The Unlimited Timer</h1>
      <div className="timer-box">
        <h2 className="count-down-header">
          {secondsToTime(seconds)}
        </h2>
        <div className="timer-btns">
          <button
            className="timer-btn"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="timer-btn"
            onClick={endTimer}
          >
            Stop
          </button>
          <button
            className="timer-btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default UnlimitedTimer;