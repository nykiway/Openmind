import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="signup-background">
        <div className="signup-form-box">
          <h2 className="signup-header">Sign Up</h2>
          <div className="login-link">
            <p>Already Have An Account?</p>
            &nbsp;
            <Link to="/login" className="login-link-a">
              Log In
            </Link>
            &nbsp;
          </div>
          <form>
            <div className="signup-fields">
              <input
                type="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
              />
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
            <div className="signup-form-buttons">
              <button
                className="signup-form-button"
                onClick={this.handleSubmit}
              >
                <Link to="/profile">Create An Account</Link>
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
