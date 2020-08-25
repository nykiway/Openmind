import React from 'react';


class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  displayModal() {
    if (this.state) {
      return null;
    }
  }


  render() {
    // let audio = new Audio(
    //   "https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Acceptance+%26+Letting+Go.mp3"
    // );
    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">Title of Meditation Here</h1>
        <h2 className="meditation-length">
          Meditation Name Goes Here
          {/* {meditation.name} */}
        </h2>
        <button
          className="fa-stack-meditation-item fa-2x"
          // onClick={() => audio.play()}
        >
          <audio src={this.props.meditation} />
          <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fas fa-play fa-stack-1x"></i>
        </button>
        <h3 className="timer-countdown">Timer Countdown Here</h3>
      </div>
    );
  }
}

export default MeditationItem;