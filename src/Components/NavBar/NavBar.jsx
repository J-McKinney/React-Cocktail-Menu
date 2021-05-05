import React, { Component } from "react";
import styling from "./NavBar.module.css";

class NavBar extends Component {
  // state = {
  //   show: true,
  //   scrollPos: 0,
  // };

  // componentDidMount() {
  //   console.log("Mount: ");
  // }
  // componentDidUpdate() {
  //   console.log("Update: ");
  // }

  render() {
    return (
      <>
        <div className={styling.wrapper}>
          <h1>NavBar</h1>
        </div>
      </>
    );
  }
}

export default NavBar;
