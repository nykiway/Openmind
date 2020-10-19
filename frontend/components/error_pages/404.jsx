import React from "react";
import {Link} from 'react-router-dom';

const ErrorPage = ({currentUser}) => {
    return (
      <div className="error-container">
        <div className="error-img-container">
          <img src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/home/404+Error+Illustration+2.png"/>
        </div>
        <h1>Oh no! This page doesn't exist!</h1>
        {currentUser ? (
          <div>
            <Link to="/login">
              <button id="err-1" className="error-btn">Log In</button>
            </Link>
            <br />
            <Link to="/signup">
              <button id="err-2" className="error-btn">Sign Up</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/discover">
            <button id="err-3" className="error-btn">Go Meditate About It</button>
            </Link>
          </div>
        )}
      </div>
    );
  }


export default ErrorPage;
