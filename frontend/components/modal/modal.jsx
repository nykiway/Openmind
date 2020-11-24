import React from 'react';
import { connect } from 'react-redux';
import MeditationItemContainer from '../discover/meditation_item_container'
import { closeModal } from '../../actions/modal_actions';
import { toggleMeditation, nullCurrentMeditation } from '../../actions/current_meditation_actions';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.props.closeModal();
    this.props.nullCurrentMeditation();
  }

  render() {
    let { modal } = this.props;

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
  
    return (
      <div className="modal-background">
        <div 
          onClick={this.handleModalClose} 
          className="close-x">
          <i className="fas fa-times"></i>
        </div>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    isPlaying: state.ui.isPlaying,
    currentMeditation: state.ui.currentMeditation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    toggleMeditation: () => dispatch(toggleMeditation()),
    nullCurrentMeditation: () => dispatch(nullCurrentMeditation())
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);