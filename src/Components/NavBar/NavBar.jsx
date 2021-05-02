import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

class NavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    console.log("Mount: ");
  }
  componentDidUpdate() {
    console.log("Update: ");
  }

  render() {
    return (
      <>
        <Jumbotron>
          <div></div>
        </Jumbotron>
      </>
    );
  }
}

export default NavBar;
