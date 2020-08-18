import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const guestGreeting = () => (
    <nav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up!</Link>
    </nav>
  );

  const userGreeting = () => (
    <div>
      <h2>Hello, {currentUser.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );

  return currentUser ? userGreeting() : guestGreeting();
};

export default Greeting;
