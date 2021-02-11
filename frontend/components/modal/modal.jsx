import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MeditationItemContainer from '../discover/meditation_item_container'
import { closeModal } from '../../actions/modal_actions';
import { 
  toggleMeditation, 
  receiveCurrentMeditation
  } from '../../actions/current_meditation_actions';
import { fetchMeditation } from '../../actions/meditation_actions'


const  Modal = ({ currentMeditation, modal, closeModal }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = React.createRef();

  const handleModalClose = (e) => {
    e.preventDefault();
    setPlaying(!playing);
    audioRef.current.pause();
    closeModal();
  }

  const controlAudio = (e) => {
    e.preventDefault();
    setPlaying(!playing);

    if(playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  const renderDuration = () => {
    const seconds = currentMeditation.duration;
    return moment.duration(seconds, "seconds").humanize();
  }

  const addMeditationToPlaylist = () => {

  }

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

    if (Object.keys(currentMeditation).length !== 0) { 
      return (
        <div className="modal-background">
          <div 
            onClick={handleModalClose} 
            className="close-x">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-child" onClick={(e) => e.stopPropagation()}>
            <div className="meditation-play">
              <h1 className="meditation-name-title">{currentMeditation.name}</h1>
              <h2 className="meditation-length">{`${renderDuration()}`}</h2>
              <button onClick={controlAudio}>
                <div className="transparent-circle" >
                  <div className="opaque-circle" >
                    {playing ? pauseIcon : playIcon}
                  </div>
                </div>
              </button>
              <h3 id="counter" className="timer-countdown"></h3>
              <button
                onClick={addMeditationToPlaylist}
              >Add Meditation To Playlist</button>
            </div>
            <audio ref={audioRef} src={currentMeditation.mp3}></audio>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
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
    fetchMeditation: (id) => dispatch(fetchMeditation(id)),
    receiveCurrentMeditation: (id) => dispatch(receiveCurrentMeditation(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);