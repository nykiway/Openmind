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
    isPlaying: state.ui.isPlaying
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditation: (id) => dispatch(fetchMeditation(id)),
  receiveCurrentMeditation: (id) => dispatch(receiveCurrentMeditation(id)),
  toggleMeditation: () => dispatch(toggleMeditation()), // use props when dispatching!!!
});

export default connect(mapStateToProps, mapDispatchToProps)(MeditationItem);
