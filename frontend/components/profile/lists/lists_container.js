import { connect } from "react-redux";
import Lists from "./lists";

import {
  fetchLists,
  createList,
  fetchList,
  deleteList  } from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.match.params.listId];

  return {
    userId: state.entities.users[state.session.id].id,
    lists: Object.values(state.entities.lists),
    currentList: list
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (data) => dispatch(fetchLists(data)),
  fetchList: id => dispatch(fetchList(id)),
  updateList: list => dispatch(fetchList(list)),
  createList: list => dispatch(createList(list)),
  deleteList: (id) => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
