import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoUser(e) {
    e.preventDefault();
    const user = {
      email: 'demouser@gmail.com',
      password: '12345678'
    }
    this.props.processForm(user);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="login-background">
        <div className="login-form-box">
          <h2 className="login-header">Log In</h2>
          <div className="signup-link">
            <p>New To Openmind?</p>
            <Link to="/signup" className="signup-link-a">
              Sign Up
            </Link>
          </div>
          <form>
            <div className="login-fields">
              <input
                type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update("email")}
              />
              <input
                type="password"
                placeholder="Password (8+ characters)"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <div className="error">
              <p>{errors ? errors[0] : ""}</p>
            </div>
            <div className="login-form-buttons">
              <button className="login-form-button" onClick={this.handleSubmit}>
                <Link to="/profile">Log In</Link>
              </button>
              <br />
              <button
                className="demo-login-form-button"
                onClick={this.demoUser}
              >
                <Link to="/profile">Demo Log In</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;