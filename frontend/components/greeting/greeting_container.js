import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Greeting);
