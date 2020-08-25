import { connect } from "react-redux";
import MeditationItem from "./meditation_item";

import { openModal, closeModal } from "../../actions/modal_actions";

import {
  fetchMeditations,
  fetchMeditation,
} from "../../actions/meditation_actions";
import { receiveCurrentMeditation, toggleMeditation} from '../../actions/current_meditation_actions';

const mapStateToProps = (state) => {
  return {
    meditations: Object.values(state.entities.meditations),
    currentMeditation: state.ui.currentMeditation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditations: (data) => dispatch(fetchMeditations(data)),
  fetchMeditation: (id) => dispatch(fetchCurrentMeditation(id)),
  receiveCurrentMeditation: (id) => dispatch(receiveCurrentMeditation(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  toggleMeditation: () => dispatch(toggleMeditation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeditationItem);
