import { logout } from "../../../actions/session_actions";
import { updateUser } from '../../../actions/user_actions';
import { connect } from "react-redux";
import Settings from "./settings";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  updateUser: (user, id) => dispatch(updateUser(user, id)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
