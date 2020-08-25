import { connect } from "react-redux";
import MeditationItem from "./meditation_item";
import { openModal, closeModal } from "../../actions/modal_actions";
import {
  fetchMeditations,
  fetchMeditation,
} from "../../actions/meditation_actions";

const mapStateToProps = (state) => {
  return {
    meditations: Object.values(state.entities.meditations),
    // currentMeditation: state.entities.meditations[state.session.id],
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditations: (data) => dispatch(fetchMeditations(data)),
  fetchMeditation: (id) => dispatch(fetchMeditation(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeditationItem);
