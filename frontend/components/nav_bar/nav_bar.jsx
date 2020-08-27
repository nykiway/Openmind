import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <ul className="header-links">
        <Link to="#">
          <li className="home">Home</li>
        </Link>
        <Link to="/discover">
          <li className="discover">Discover</li>
        </Link>
        <Link to="/stats">
          <li className="profile">Profile</li>
        </Link>
        <Link to="/logout">
          <li className="logout" onClick={logout}>
            Log Out
          </li>
        </Link>
      </ul>
    </div>
  ) : (
    <div>
      <ul className="header-links">
        <Link to="/signup">
          <li className="signup-nav-header">Sign Up</li>
        </Link>
        <Link to="/login">
          <li className="login-nav-header">Log In </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <header className="nav-bar">
      <Link to="/home">
        <img className="logo" src={window.logoURL} alt="logo" />
      </Link>
      <div>
        {display}
      </div>
    </header>
  );
}

export default NavBar;