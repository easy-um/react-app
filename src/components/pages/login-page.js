import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { validateString } from '../../util/validation'

class LoginPage extends Component {

  state = {
    email: '',
    password: '',
    rules: {
      email: {
        isValidate: true,
        min: 5
      },
      password: {
        isValidate: true,
        min: 3
      }
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state)
  // }

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

  handleSubmit = (event) => {
    event.preventDefault();
    // validation
    const isEmailValid = validateString(this.state.email, this.state.rules.email)
    const isPasswordValid = validateString(this.state.password, this.state.rules.password)
    if (!isEmailValid || !isPasswordValid) return
    // credentials check
    this.props.onLogin(this.state.email, this.state.password);
  }


  render() {
    const { isLoggedIn } = this.props;
    const { email, password } = this.state;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Login Page</h2>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
