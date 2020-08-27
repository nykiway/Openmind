import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../sub_navs/profile_nav';

const Settings = ({ logout }) => {
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

export default Settings;
