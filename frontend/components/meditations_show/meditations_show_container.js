import { connect } from "react-redux";

import { fetchMeditation } from "../../actions/meditation_actions";
import MeditationsShow from "./meditations_show";

const mapStateToProps = (state, { match }) => {
  const meditationId = parseInt(match.params.meditation.id);
  return {
    meditationId
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditation: (id) => dispatch(fetchMeditation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeditationsShow);
