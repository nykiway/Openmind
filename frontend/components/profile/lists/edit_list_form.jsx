import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateList } from '../../../actions/list_actions';

const EditListForm = ({ updateList, list, userId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleEditSubmit = (e) => {
    e.preventDefault();

    let updatedList = {
      userId: userId,
      title: title,
      description: description,
      id: list.id
    }

    updateList(updatedList);
  }

  return (
    <div className="list-modal">
      <h1>Edit {list.title}</h1>
        <form>
        <input
          type="text"
          placeholder="List Name"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <br />
        <input
          type="text"
          placeholder="List Description"
          value={description}
          name="description"
          onChange={e => setDescription(e.target.value)}
          />
        <button 
          type="submit"
          value="Submit"
          onClick={handleEditSubmit}
          > Confirm Changes
        </button>
      </form>
    </div>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);