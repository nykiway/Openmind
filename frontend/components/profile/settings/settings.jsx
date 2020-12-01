import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../sub_navs/profile_nav';
import {logout } from '../../../actions/session_actions';
import { updateUser } from '../../../actions/user_actions';

class Settings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: "",
        email: ""
      }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e, id) {
    e.preventDefault();

    let updatedUser = {
      username: this.state.username,
      email: this.state.email,
      id: id
    }

    this.props.updateUser(updatedUser, id);
  }

  render() {
    return (
        <div>
          <ProfileNav />
          <div className="settings-div">
            <form className="settings-form">
              <label className="settings-form-label">Username</label>
              
              <input
                className="settings-form-input"
                type="text"
                placeholder={this.props.currentUser.username}
                onChange={this.update("username")}
                />
              <br/>

              <label className="settings-form-label">Email</label>
              <input
                className="settings-form-input"
                type="text"
                placeholder={this.props.currentUser.email}
                onChange={this.update("email")}
                />
              <br />
              <button 
                onClick={(e) => this.handleSubmit(e, this.props.currentUser.id)}
                className="save-changes-settings" 
                type="submit">
                Save Changes
              </button>
              < br/>
              <Link to="/logout">
              <h1 className="logout-settings" onClick={logout} >
                Log Out
                </h1>
              </Link>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default Settings;
  