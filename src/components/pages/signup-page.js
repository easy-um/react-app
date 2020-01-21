import React, { Component } from "react";

class SignupPage extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastName: "",
    birthDay: ""
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  onFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value
    });
  }

  onLastnameChange = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  onBirthDayChange = (event) => {
    this.setState({
      birthDay: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSignUp(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastName: "",
      birthDay: ""
    });
  }

  render() {
    const { email, password, confirmPassword, firstname, lastName, birthDay } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Sign Up Page</h2>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={this.onEmailChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={this.onPasswordChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={confirmPassword}
              onChange={this.onConfirmPasswordChange}
            ></input>
          </div>

          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstname}
                onChange={this.onFirstnameChange}
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lastName}
                onChange={this.onLastnameChange}
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Birth day"
                value={birthDay}
                onChange={this.onBirthDayChange}
              ></input>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
