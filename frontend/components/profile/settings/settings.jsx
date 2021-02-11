import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from '../sub_navs/profile_nav';
import { logout } from '../../../actions/session_actions';
import { updateUser } from '../../../actions/user_actions';
import { connect } from "react-redux";

const Settings = ({ currentUser, logout, updateUser }) =>  {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => {
      window.location.reload();
    }
  }, [currentUser.username, currentUser.email])

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedUser = {
      username: username,
      email: email,
      id: currentUser.id
    }
    updateUser(updatedUser, currentUser.id)
  }
    return (
        <div>
          <ProfileNav />
          <div className="settings-div">
            <form className="settings-form">
              <label className="settings-form-label">Username</label>
              
              <input
                className="settings-form-input"
                type="text"
                placeholder={currentUser.username}
                onChange={e => setUsername(e.target.value)}
                />
              <br/>

              <label className="settings-form-label">Email</label>
              <input
                className="settings-form-input"
                type="text"
                placeholder={currentUser.email}
                onChange={e => setEmail(e.target.value)}
                />
              <br />
              <button 
                id={currentUser.id}
                onClick={handleSubmit}
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

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  updateUser: (user, id) => dispatch(updateUser(user, id)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
  