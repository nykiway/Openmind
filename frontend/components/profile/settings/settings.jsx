import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../sub_navs/profile_nav";

class Settings extends React.Component {
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
              placeholder={"username"}
            />
            <br/>
            <label className="settings-form-label">Email</label>
            
            <input
              className="settings-form-input"
              type="text"
              placeholder={"email"}
            />
            <br />
            <button className="save-changes-settings" type="submit">
              Save Changes
            </button>
            < br/>
            <a className="logout-settings" href="/logout" onClick={logout}>
              Log Out
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
