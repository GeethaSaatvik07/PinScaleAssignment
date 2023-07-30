import React, { Component } from "react";

import {
  LoginPage,
  LoginCard,
  LoginDetails,
  UserInputs,
  LoginButton,
} from "./styledComponents";

class Login extends Component {
  state = { email: "", password: "" };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitLogin = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginPage>
        <LoginCard onSubmit={this.onSubmitLogin}>
          <h1>Money Matters</h1>
          <LoginDetails>
            <UserInputs
              type="email"
              value={email}
              onChange={this.onChangeEmail}
              required
            />
            <UserInputs
              type="password"
              value={password}
              onChange={this.onChangePassword}
              required
            />
          </LoginDetails>
          <LoginButton type="submit">Login</LoginButton>
        </LoginCard>
      </LoginPage>
    );
  }
}

export default Login;
