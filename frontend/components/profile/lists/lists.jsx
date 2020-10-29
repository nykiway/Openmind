import React from 'react';
import ProfileNav from '../sub_navs/profile_nav';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      showModal: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.createNewList = this.createNewList.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }

  componentDidUpdate(prevProps) {
    if (this.props.lists.length != prevProps.lists.length) {
      this.props.fetchLists();
    }
  }

  handleClick() {
    this.setState({ showModal: !this.state.showModal })
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value })
  }

  createNewList() {
    let newList = {
      userId: this.props.userId,
      title: this.state.title,
      description: this.state.description
    }
    this.props.createList(newList);
    this.setState({ showModal: !this.state.showModal });
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
          <button 
            className="add-meditation-button"
            onClick={this.handleClick}
            >
              Create New List
          </button>
          <br />
          { this.state.showModal ? (
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
                  >Add List</button>
              </form>
            </div>
          ) : (
            <div className="list-list">
                <div className="list-content">
                  {this.props.lists ? this.props.lists.map((list, idx) => {
                  if (this.props.lists) {
                    return (
                      <div key={idx} className="list-item">
                        <div>
                          <h1 className="list-name">{list.title}</h1>
                          <h2 className="list-details">{list.description}</h2>
                        </div>
                        <div className="list-icons">
                          <i id="list-play" className="fas fa-play list-icon-play"></i>
                          <i className="fas fa-edit list-icon-edit"></i>
                          <i
                            listid={list.id}
                            className="fas fa-times list-icon-times"
                            onClick={(e) => {
                              e.preventDefault();
                              this.props.deleteList(list.id)
                              // .then(() => this.props.history.push("/lists"));
                            }}
                          ></i>
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
