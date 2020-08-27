import { logout } from "../../../actions/session_actions";
import { connect } from "react-redux";
import Settings from "./settings";

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
