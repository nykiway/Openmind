import { connect } from "react-redux";
import Lists from "./lists";

import {
  fetchLists,
  createList,
  fetchList,
  deleteList  } from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.entities.users[state.session.id].id,
  lists: Object.values(state.entities.lists),
  currentList: state.entities.lists[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (data) => dispatch(fetchLists(data)),
  fetchList: id => dispatch(fetchList(id)),
  createList: list => dispatch(createList(list)),
  deleteList: id => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
