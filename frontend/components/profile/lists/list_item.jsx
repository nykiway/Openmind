import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {
  fetchLists,
  deleteList  } from '../../../actions/list_actions'
import EditListForm from './edit_list_form';
import ShowListMeditations from './show_list_meditations';

const ListItem = ({ fetchLists, lists, list, deleteList }) => {
  const [editListModal, setEditListModal] = useState(false);
  const [showMeditations, setShowMeditations] = useState(false);

  useEffect(() => {
      fetchLists();
      return () => {
        fetchLists();
      }
    }, [lists.length])

    const toggleUpdateModal = (e) => {
      e.preventDefault();
      setEditListModal(!editListModal);
    }

    const toggleShowMeditations = (e) => {
      e.preventDefault();
      setShowMeditations(!showMeditations);
    }

    return (
        // <div className="list-item-container">
        <div className="list-content">
          {list !== undefined ? (
            <div className="list-item">
              <div>
                  <h1 className="list-name">{list.title}</h1>
                  <h1 className="list-details">{list.description}</h1>
              </div>
              <div className="list-icons">
                <i id="list-play" 
                  className="fas fa-play list-icon-play"
                  onClick={toggleShowMeditations}
                  ></i>
                <i
                  listid={list.id}
                  className="fas fa-edit list-icon-edit"
                  onClick={toggleUpdateModal}
                  ></i>
                <i
                  listid={list.id}
                  className="fas fa-times list-icon-times"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteList(list.id)
                  }}
                  ></i>
              </div>
            </div>
          ) : null}
          { editListModal ? <EditListForm list={list} />: null}
          { showMeditations ? <ShowListMeditations list={list} /> : null}
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
  deleteList: (id) => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);