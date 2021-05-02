import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import styling from "./SignInForm.module.css";

class SignInForm extends Component {
  render() {
    return (
      <>
        <div className={styling.wrapper}>
          <Jumbotron className={styling.jumbotron}></Jumbotron>
        </div>
      </>
    );
  }
}

export default SignInForm;
