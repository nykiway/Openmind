import { connect } from "react-redux";
import Lists from "./lists";

import {
  fetchLists,
  createList,
  fetchList  } from '../../../actions/list_actions';

const mapStateToProps = (state) => ({
  userId: state.entities.users[state.session.id].id,
  lists: Object.values(state.entities.lists),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (data) => dispatch(fetchLists(data)),
  fetchList: id => dispatch(fetchList(id)),
  createList: list => dispatch(createList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
