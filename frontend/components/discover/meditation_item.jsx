import React from 'react';
import moment from 'moment';
import { closeModal } from '../../actions/modal_actions';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      duration: null,
    }
    this.controlAudio = this.controlAudio.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
  }

  controlAudio() {
    this.props.toggleMeditation();
  
    if (this.props.isPlaying) {
      this.audio.pause();
      
    } else {
      this.audio.play()
    }
  }

  renderDuration() {
    const seconds = this.props.currentMeditation.duration;
    return moment.duration(seconds, "seconds").humanize();
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
      <div className="meditation-play">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length">{`${this.renderDuration()}`}</h2>

          <button onClick={() => this.controlAudio()}>
            <div className="transparent-circle" >
              <div className="opaque-circle" >
                {this.props.isPlaying ? pauseIcon : playIcon}
              </div>
            </div>
          </button>

        <h3
          id="counter"
          className="timer-countdown"
        >
          {/* {this.countdown()} */}
        </h3>
      </div>
    );
  }
}

export default MeditationItem;