import React from "react";
import DiscoverNav from '../../profile/sub_navs/discover_nav';

class Timers extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.stopTimer = this.stopTimer.bind(this);
    this.onClickStop = this.onClickStop.bind(this);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({count: (this.state.count + 1)})
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({count: (this.state.count = 0)});
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let formatted =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return formatted;
  }

  onClickStop() {
    this.stopTimer();
    let bell = new Audio(
      "https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Japanese+temple+small+bell+-+Sound+effect.mp3"
    );

    bell.play();
  }

  render() {
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
          <h1 className="unlimited-timer">The Unlimited Timer</h1>
          <div className="count-up-timer">
            <h2 className="count-number">
              {this.secondsToTime(this.state.count)}
            </h2>
            <button
              id="count-up-button-1"
              className="count-up-button"
              onClick={this.startTimer.bind(this)}
            >
              Start
            </button>
            <button
              id="count-up-button-2"
              className="count-up-button"
              onClick={() => this.onClickStop()}
            >
              Stop
            </button>
            <button
              id="reset-timer-button"
              className="count-up-button"
              onClick={this.resetTimer.bind(this)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timers;
