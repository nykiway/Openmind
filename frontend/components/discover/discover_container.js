import { connect } from "react-redux";
import Discover from "./discover";
import { fetchMeditations, fetchMeditation } from '../../actions/meditation_actions';


const mapStateToProps = (state) => {
  return {
    meditations: Object.values(state.entities.meditations),
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditations: (data) => dispatch(fetchMeditations(data)),
  fetchMeditation: (id) => dispatch(fetchMeditation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
