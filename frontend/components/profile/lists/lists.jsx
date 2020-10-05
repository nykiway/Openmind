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
  }

  handleClick() {
    this.setState({ showModal: !this.state.showModal })
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
          { this.state.showModal ? (
            <div>
              <h1>Create a new List</h1>
              <form>
                <label>List Name</label>
                <input
                  value={this.state.listName}
                  placeholder="List Name"
                  type="text"
                  onChange={}
                  />
                <label>Description</label>
                <input
                  value={this.state.description}
                  placeholder="List Name"
                  type="text"
                  onChange={}
                  />
                <button type="submit">Add List</button>
              </form>
            </div>
          ) : "" }
          <br />
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
        </div>
      </div>
    );
  }
}

export default Lists;
