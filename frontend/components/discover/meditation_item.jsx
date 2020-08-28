import React from 'react';
import moment from 'moment';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.controlAudio = this.controlAudio.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
    // this.countdown = this.countdown.bind(this);
  }
  
  controlAudio() {
    this.props.toggleMeditation();
    if (this.props.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play()
      .then(() => console.log("yippee!"), (errors) => console.log(errors));
    }
  } 
  
  renderDuration() {
    const seconds = this.props.currentMeditation.duration;
    return moment.duration(seconds, "seconds").humanize();
  }

  countdown() {
    if (this.props.isPlaying) {
      let t1 = this.props.currentMeditation.duration;
      let t2 = t1.replace(':', "");
      let time = t2.replace(':', "");

      var count = time,
        timer = setInterval(function () {
          $("#counter").html(count--);
          if (count == 1) clearInterval(timer);
        }, 1000);
    }
  }

  render() {
    const { currentMeditation } = this.props;
    
    // dynamic pause & play icons 
    const pauseIcon = <i className="fas fa-pause meditation-stack-1x" />
    const playIcon = <i className="fas fa-play meditation-stack-1x"  />

    // checks if audio & mp3 file exists
    if (!this.audio && currentMeditation.mp3) {
      this.audio = document.createElement('audio')
      this.audio.src = currentMeditation.mp3
    }
    // if audio file is non-existent return null
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
        <h3
          id="counter"
          className="timer-countdown"
    >{this.countdown()}</h3>
      </div>
    );
  }
}

export default MeditationItem;