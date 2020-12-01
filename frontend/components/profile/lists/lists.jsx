import React from 'react';
import ProfileNav from '../sub_navs/profile_nav';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      editTitle: "",
      editDescription: "",
      showNewListModal: false,
      showEditListModal: false,
    }
    this.createNewList = this.createNewList.bind(this);
    this.createNewListModal = this.createNewListModal.bind(this);
    this.editListModal = this.editListModal.bind(this);
    this.update = this.update.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  componentDidUpdate(prevProps) {
    if (this.props.lists.length != prevProps.lists.length) {
      this.props.fetchLists();
    }
  }
  
  update(field) {
    return e =>
    this.setState({ [field]: e.currentTarget.value })
  }
  
  createNewList(e) {
    e.preventDefault();
    let newList = {
      userId: this.props.userId,
      title: this.state.title,
      description: this.state.description
    }
    this.props.createList(newList);
  }
  
  createNewListModal() {
    this.setState({ showNewListModal: !this.state.showNewListModal });
  }

  editListModal(e) {
    this.setState({ showEditListModal: !this.state.showEditListModal });
  }

  handleEditSubmit(e) {
    console.log("hitting handle edit submit")
    e.preventDefault();
    
    let updatedList = {
      userId: this.props.userId,
      title: this.state.editTitle,
      description: this.state.editDescription
    }
    this.props.updateList(updatedList);
  }

  render() {
    return (
      <div>
        <ProfileNav />
        <div className="list-hero">
          <img
            className="list-hero-image"
            src={
              "https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/HS-MAY2019-BLOG_Mindfulness-BLOG-HERO-1440x512-FINAL.jpg"
            }
          />
        </div>
        <div className="lists-container">
          { this.state.showNewListModal ? (
          <button 
            className="add-meditation-button"
            onClick={this.createNewListModal}
            >
              Return to Lists
          </button>
          ) : (
          <button 
            className="add-meditation-button"
            onClick={this.createNewListModal}
            >
              Create New List
          </button>
          )}
          <br />
          { this.state.showNewListModal ? (
            <div className="list-modal">
              <h1>Create a new List</h1>
              <form>
                <input
                  value={this.state.title}
                  placeholder="List Name"
                  type="text"
                  onChange={this.update("title")}
                  />
                  <br />
                <input
                  value={this.state.description}
                  placeholder="List Description"
                  type="text"
                  onChange={this.update("description")}
                  />
                <button 
                  type="submit"
                  onClick={this.createNewList}
                  >
                    Add List
                </button>
              </form>
            </div>
          ) : (
            <div className="list-list">
                <div className="list-content">
                  {this.props.lists ? this.props.lists.map((list, idx) => {
                  if (this.props.lists) {
                    return (
                      <div 
                        key={idx} 
                        className="list-item-container"
                        >
                        <div className="list-item">
                          <div>
                            <h1 className="list-name">{list.title}</h1>
                            <h2 className="list-details">{list.description}</h2>
                          </div>
                          <div className="list-icons">
                            <i id="list-play" className="fas fa-play list-icon-play"></i>
                            <i 
                              listid={list.id}
                              className="fas fa-edit list-icon-edit"
                              onClick={this.editListModal}
                            ></i>
                            <i
                              listid={list.id}
                              className="fas fa-times list-icon-times"
                              onClick={(e) => {
                                e.preventDefault();
                                this.props.deleteList(list.id)
                              }}
                            ></i>
                          </div>
                        </div>
                        <div className="edit-list-container">
                          {!this.state.showEditListModal ? (
                            <div className="edit-list-content">
                              <form>
                                <div className="edit-list-fields">
                                  <h1 className="edit-list-label">Name</h1>
                                  <input 
                                    type="text" 
                                    value={this.state.editTitle}
                                    placeholder={list.title}
                                    onChange={this.update("editTitle")}
                                    />
                                  <h1 className="edit-list-label">Description</h1>
                                  <input 
                                    type="text" 
                                    value={this.state.editDescription}
                                    onChange={this.update("editDescription")}
                                    placeholder={list.description}
                                    />
                                  <button
                                    type="submit"
                                    onClick={(e) => this.handleEditSubmit(e)}
                                  >Save Changes</button>
                                </div>
                              </form>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )
                  }
                  }) : null }
                </div>
            </div>
          ) }
      </div>
    </div>
    );
  }
}

export default Lists;
