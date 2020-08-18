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
        <li className="home">Home</li>
        <li className="discover">Discover</li>
        <li className="profile">Profile</li>
      </ul>
    </div>
  );
}

export default NavBar;