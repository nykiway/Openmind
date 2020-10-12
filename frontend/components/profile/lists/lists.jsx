import React from 'react';
import ProfileNav from '../sub_navs/profile_nav';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "",
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

  handleClick() {
    this.setState({ showModal: !this.state.showModal })
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value })
  }

  createNewList() {
    this.props.createList();
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
        <div className="lists-div">
          <button 
            className="add-meditation-button"
            onClick={this.handleClick}
            >
              Create New List
          </button>
          <br />
          { !this.state.showModal ? (
            <div className="list-modal">
              <h1>Create a new List</h1>
              <form>
                <input
                  value={this.state.listName}
                  placeholder="List Name"
                  type="text"
                  onChange={this.update("listName")}
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
                  onClick={this.createNewList()}
                  >Add List</button>
              </form>
            </div>
          ) : (
          <div className="list-content">
            <div className="list-item">
              <h1 className="list-name">Chill Vibes</h1>
              <h2 className="list-details">When you need to relax</h2>
            </div>
            <ul className="list-icons">
              <li><i className="fas fa-play list-icon-play"></i></li>
              <li><i className="fas fa-edit list-icon-edit"></i></li>
              <li><i className="fas fa-times list-icon-times"></i></li>
            </ul>
          </div>
          ) }
        </div>
      </div>
    );
  }
}

export default Lists;
