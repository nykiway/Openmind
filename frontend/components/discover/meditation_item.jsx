import React from 'react';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.playAudio = this.pauseAudio.bind(this);
  }

  playAudio() {
    let audio = new Audio(`${this.props.currentMeditation.mp3}`);
    this.props.toggleMeditation();
    audio.play();
  }

  pauseAudio() {
    let audio = new Audio(`${this.props.currentMeditation.mp3}`);
    this.props.toggleMeditation();
    audio.pause();
  }
  
  render() {
    const { currentMeditation } = this.props;

    const pause = <i className="fas fa-pause meditation-stack-1x" onClick={() => this.pauseAudio()} />
    const play = <i className="fas fa-play meditation-stack-1x" onClick={() => this.playAudio()}/>
    
    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length">{"audio duration goes here"}</h2>
        <button className="meditation-stack fa-3x">
          <i className="fas fa-circle meditation-stack-3x"></i>
          <i className="fas fa-circle meditation-stack-2x"></i>
          { this.props.isPlaying ? pause : play }
        </button>
        <h3 className="timer-countdown">Timer Countdown Here</h3>
      </div>
    );
  }
}

export default MeditationItem;