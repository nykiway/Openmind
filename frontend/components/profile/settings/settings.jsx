import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../sub_navs/profile_nav';
import {logout} from '../../../actions/session_actions';

class Settings extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: "",
        password: ""
      }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.processForm(this.state);
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
                onClick={this.handleSubmit}
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
  