import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import MeditationItemContainer from '../discover/meditation_item_container'

function Modal({ modal}) {
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
      <div onClick={closeModal} className="close-x">
        <i className="fas fa-times"></i>
      </div>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
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