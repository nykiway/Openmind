import React from "react";
import DiscoverNav from '../../profile/sub_navs/discover_nav';

class Timers extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 1 }
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

  render() {
    return (
      <div>
        <DiscoverNav />
        <h1>This is where the timers go!</h1>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div>
      </div>
    );
  }
}

export default Timers;
