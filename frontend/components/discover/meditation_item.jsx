import React from 'react';

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      currentTime: 0
    };

    this.playAudio = this.playAudio.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.currentMeditation.isPlaying) {
  //     this.audioRef.current.play();
  //   } else {

  //   }
  // }

  playAudio() {
    // this.togglePlay = this.props.currentMeditation.isPlaying ? (
    //   <i
    //     className="fas fa-pause meditation-stack-1x"
    //     onClick={this.props.toggleMeditation}
    //   />
    // ) : (
    //   <i
    //     className="fas fa-play meditation-stack-1x"
    //     onClick={this.props.toggleMeditation}
    //   />
    // ); 
    let audio = new Audio(`${this.props.currentMeditation.mp3}`);
    this.props.toggleMeditation()
    // audio.play();
  }
  
  
  
  render() {
    const { currentMeditation } = this.props;
    
    debugger
    return (
      <div className="meditation-item">
        <h1 className="meditation-name-title">{currentMeditation.name}</h1>
        <h2 className="meditation-length">{"audio duration goes here"}</h2>
        <button
          className="meditation-stack fa-3x"
          onClick={() => this.playAudio()}
        >
          <i className="fas fa-circle meditation-stack-3x"></i>
          <i className="fas fa-circle meditation-stack-2x"></i>
          {/* { this.togglePlay } */}
          {currentMeditation.isPlaying}
          {/* <i className="fas fa-play meditation-stack-1x"></i> */}
        </button>
        <h3 className="timer-countdown">Timer Countdown Here</h3>
      </div>
    );
  }
}

export default MeditationItem;