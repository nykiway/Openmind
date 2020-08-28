import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img
          className="hero"
          src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/park_meditation.jpg?versionId=null"
          alt="logo"
        />
        <div className="hero-content">
          <h1>Meditation made simple</h1>
          <br />
          <h2>
            Take the first step on your journey towards a healthier, happier
            life. Learn to meditate with Openmind.
          </h2>
          <p>
            There are many ways to learn to be more mindful, and every single
            moment of the day is another opportunity to remember that quality of
            mind and be present. Until we are really familiar with that quality
            of mind, that’s not always so easy. That’s where meditation comes
            in. Meditation helps us become more familiar with what it means to
            be present, so we can carry that back into our everyday life and
            experience it whenever, and wherever we are.
          </p>
          <br />
          <div className="buttons">
            <Link to="/signup">
              <button className="home-signup-button" type="submit">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* come back and add these photos later */}
        <div className="features-section">
          <div className="features-images">
            <img
              className="mindful-approach"
              src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/home/01.svg"
              alt=""
            />
            <img
              className="loves-science"
              src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/home/02.svg"
              alt=""
            />
            <img
              className="many-meditators"
              src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/home/03.svg"
              alt=""
            />
          </div>

          <div className="features-text">
            <div className="mindful-approach-text">
              <h1>Learn a Mindful Approach</h1>
              <p>
                Explore guided exercises, videos, and more to help you get
                healthier and happier.
              </p>
            </div>
            <div className="loves-science-text">
              <h1>Openmind Loves Science</h1>
              <p>Just 10 days of Openmind can increase happiness by 16%.</p>
            </div>
            <div className="many-meditators-text">
              <h1>Join our Many Meditators</h1>
              <p>
                Everything is better with friends, join our many users in
                finding peace.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="covid">Our COVID-19 Response</h1>
          <h2>
            During an unsettling time, we are here for you. If you have recently
            lost your job due to Covid-19, we are offering Openmind, entirely
            free.
          </h2>
          <ReactPlayer
            className="home-video"
            url="https://www.youtube.com/watch?v=Dwf_n4H1-z0"
          />
          <p id="under-video">
            There are many ways to learn to be more mindful, and every single
            moment of the day is another opportunity to remember that quality of
            mind and be present. Until we are really familiar with that quality
            of mind, that’s not always so easy. That’s where meditation comes
            in. Meditation helps us become more familiar with what it means to
            be present, so we can carry that back into our everyday life and
            experience it whenever, and wherever we are.{" "}
          </p>
          <Link to="/login">
          <button className="home-signup-button">Log In</button>
          </Link>
        </div>

        <div className="closer-image">
          <img
            className="sun-image"
            src="https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/transparent_sun.svg"
            alt="transparent-sun"
          />
        </div>
      </div>
    );
  }
}

export default Home;
