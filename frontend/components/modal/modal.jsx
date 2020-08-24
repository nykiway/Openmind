import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import MeditationItem from '../discover/meditation_item';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal) {
    case 'meditation':
      component = <MeditationItem />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);