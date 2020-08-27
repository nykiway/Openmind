import React from 'react';
import moment from 'moment';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.controlAudio = this.controlAudio.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
    this.renderCurrentTime = this.renderCurrentTime.bind(this);
  }

  controlAudio() {
    this.props.toggleMeditation();
    if (this.props.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play().then(() => console.log("yippee!"));
    }
  }

  renderCurrentTime() {
    return Math.floor(this.audio.currentTime) + " Seconds";
  }  

  renderDuration() {

    if (!this.audio.duration) {
      return "";
    } else {
      const seconds = this.audio.duration;
      return moment.duration(seconds, "seconds").humanize();
    }
  }

  
  render() {
    const { currentMeditation } = this.props;

    const pauseIcon = <i className="fas fa-pause meditation-stack-1x" />
    const playIcon = <i className="fas fa-play meditation-stack-1x"  />

    if (!this.audio && currentMeditation.mp3) {
      this.audio = new Audio(`${this.props.currentMeditation.mp3}`);
      this.audio.crossOrigin = "anonymous";
    }

    if (!this.audio) {
      return null;
    }

    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length">{`${this.renderDuration()}`}</h2>
        <button
          className="meditation-stack fa-3x"
          onClick={() => this.controlAudio()}
        >
          <i className="fas fa-circle meditation-stack-3x"></i>
          <i className="fas fa-circle meditation-stack-2x"></i>
          {this.props.isPlaying ? pauseIcon : playIcon}
        </button>
        <h3 className="timer-countdown">{`${this.renderCurrentTime()}`}</h3>
      </div>
    );
  }
}

export default MeditationItem;