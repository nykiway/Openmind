import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ currentUserId, logout }) => {
  const showDropdown = () => {
    document.getElementById('options').classList.toggle("show-dropdown")
  }

  return (
    <div className="nav-bar">
      <Link to="/login">
        <img className="logo" src={window.logoURL} alt="logo" />
      </Link>
      <ul className="header-links">
        <Link to="#">
          <li className="home">Home</li>
        </Link>
        <Link to="/discover">
          <li className="discover">Discover</li>
        </Link>
        <Link to="/profile">
          <li className="profile">Profile</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;