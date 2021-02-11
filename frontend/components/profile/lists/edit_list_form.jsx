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
    <div className="edit-list-form">
    <div className="list-modal">
      <h1>Edit {list.title}</h1>
        <form>
        <input
          type="text"
          placeholder={list.title}
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <br />
        <input
          type="text"
          placeholder={list.description}
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.entities.users[state.session.id].id,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateList: list => dispatch(updateList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);