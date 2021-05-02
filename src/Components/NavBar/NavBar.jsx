import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styling from "./NavBar.module.css";

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
        <div className={styling.wrapper}>
          <Jumbotron className={styling.jumbotron}>
            <Row>
              <Col>
                <h1>Find Your Pour</h1>
              </Col>
              <Col>
                <Link to="/">
                  <h1>Login</h1>
                </Link>
              </Col>
              <Col>
                <Link to="/Main">
                  <h1>Home</h1>
                </Link>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default NavBar;
