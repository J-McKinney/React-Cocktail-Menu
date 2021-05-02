import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import styling from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <Jumbotron className={styling.jumbotron}>
          <div>
            <h1>Footer</h1>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Footer;
