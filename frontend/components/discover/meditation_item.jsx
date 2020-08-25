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

  playAudio() {
    let audio = new Audio(`${this.props.currentMeditation.mp3}`);
    audio.play();
  }

  // togglePlay = () => {

  // }


  render() {
    const { currentMeditation } = this.props;
    
    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length"></h2>
          {/* {currentMeditation.mp3} */}
        <button
          className="fa-stack-meditation-item fa-2x"
          onClick={() => this.playAudio()}
        >
          <i className="fas fa-circle fa-stack-2x"></i>
          <i className="fas fa-play fa-stack-1x"></i>
        </button>
        <h3 className="timer-countdown">Timer Countdown Here</h3>
      </div>
    );
  }
}

export default MeditationItem;