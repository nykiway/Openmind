import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ currentUserId, logout }) => {
  const showDropdown = () => {
    document.getElementById('options').classList.toggle("show-dropdown")
  }

  return (
    <div>
      <Link to="/" className="header-logo-link">
        <img className="logo" src={window.logoURL} alt="logo" />
      </Link>
      <ul className="header-links">
        <li className="home">Home</li>
        <li className="profile">Profile</li>
        <li className="search">Search</li>
      </ul>
    </div>
  );
}

export default NavBar;