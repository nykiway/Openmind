import { connect } from "react-redux";
import Lists from "./lists";

import {
  fetchLists,
  createList,
  fetchList,
  updateList,
  deleteList  } from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.entities.users[state.session.id].id,
    lists: Object.values(state.entities.lists),
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (data) => dispatch(fetchLists(data)),
  fetchList: id => dispatch(fetchList(id)),
  updateList: list => dispatch(updateList(list)),
  createList: (list, id) => dispatch(createList(list, id)),
  deleteList: (id) => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
