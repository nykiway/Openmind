import React from 'react';
import moment from 'moment';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.controlAudio = this.controlAudio.bind(this);
    this.renderCurrentTime = this.renderCurrentTime.bind(this);
  }

  controlAudio() {
    if (!this.audio) {
      this.audio = new Audio(`${this.props.currentMeditation.mp3}`);
    }

    this.props.toggleMeditation();
    if (this.props.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

  }

  renderCurrentTime() {
    if (!this.audio) {
      this.audio = new Audio(`${this.props.currentMeditation.mp3}`);
    }
    return moment(this.audio.currentTime).format("mm:ss");
  }  

  
  render() {
    const { currentMeditation } = this.props;

    const pauseIcon = <i className="fas fa-pause meditation-stack-1x" />
    const playIcon = <i className="fas fa-play meditation-stack-1x"  />
    
    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length">{`${"what the hell"}`}</h2>

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