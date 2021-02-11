import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MeditationItemContainer from '../discover/meditation_item_container'
import { closeModal } from '../../actions/modal_actions';
import { 
  toggleMeditation, 
  nullCurrentMeditation,
  receiveCurrentMeditation
  } from '../../actions/current_meditation_actions';
import { fetchMeditation } from '../../actions/meditation_actions'


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      playing: false
    }
    this.handleModalClose = this.handleModalClose.bind(this);
    this.controlAudio = this.controlAudio.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
  }

  handleModalClose() {
    this.setState({ playing: !this.state.playing});
    this.audioRef.current.pause();
    this.props.closeModal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.state.playing ? this.audioRef.current.play() : this.audioRef.current.pause();
    }
  }

  controlAudio() {
    this.setState({ playing: !this.state.playing })

    if(this.state.playing) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.play();
    }
  }

  renderDuration() {
    const seconds = this.props.currentMeditation.duration;
    return moment.duration(seconds, "seconds").humanize();
  }

  render() {
    let { modal } = this.props;
    const { currentMeditation } = this.props;

    // modal functionality:

    if (!modal) {
      return null;
    }

    let component;
    switch(modal) {
      case 'meditation':
        component = <MeditationItemContainer />;
        break;
      default:
        return null;
    }

    // dynamic pause/ play buttons
    
    const pauseIcon = <i className="fas fa-pause meditation-stack-1x" />
    const playIcon = <i className="fas fa-play meditation-stack-1x"  />

    // if current meditation exists, return modal : don't

    if (Object.keys(this.props.currentMeditation).length !== 0) { 
      return (
        <div className="modal-background">
          <div 
            onClick={this.handleModalClose} 
            className="close-x">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-child" onClick={(e) => e.stopPropagation()}>
            <div className="meditation-play">
              <h1 className="meditation-name-title">{currentMeditation.name}</h1>
              <h2 className="meditation-length">{`${this.renderDuration()}`}</h2>
              <button onClick={() => this.controlAudio()}>
                <div className="transparent-circle" >
                  <div className="opaque-circle" >
                    {this.state.playing ? pauseIcon : playIcon}
                  </div>
                </div>
              </button>
              <h3 id="counter" className="timer-countdown"></h3>
              <button>Add Meditation To Playlist</button>
            </div>
            <audio ref={this.audioRef} src={this.props.currentMeditation.mp3}></audio>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    meditations: Object.values(state.entities.meditations),
    currentMeditation: state.ui.currentMeditation,
    isPlaying: state.ui.isPlaying,
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    toggleMeditation: () => dispatch(toggleMeditation()),
    nullCurrentMeditation: () => dispatch(nullCurrentMeditation()),
    fetchMeditation: (id) => dispatch(fetchMeditation(id)),
    receiveCurrentMeditation: (id) => dispatch(receiveCurrentMeditation(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);