import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
// import SignIn from "../Components/SignInForm/SignInForm";
// import Footer from "../Components/Footer/Footer";

class Login extends Component {
  render() {
    return (
      <>
        <div>
          <NavBar />
          <h1>Login!</h1>
        </div>
      </>
    );
  }
}

export default Login;
