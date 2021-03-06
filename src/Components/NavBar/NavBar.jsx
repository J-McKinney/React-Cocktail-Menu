import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Cocktails.svg";
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
          <div className={styling.container}>
            <div id={styling.row} className="row">
              <div id={styling.col} className="col-md-1">
                <Link className={styling.navLink} to="/Main">
                  <img
                    src={logo}
                    alt="cocktail logo"
                    className={styling.logo}
                  />
                </Link>
              </div>
              <div id={styling.col} className="col-md-7" />
              <div id={styling.col} className="col-md-1">
                <Link className={styling.navLink} to="/Main">
                  <div className={styling.text}>Home</div>
                </Link>
              </div>
              <div id={styling.col} className="col-md-2">
                <Link className={styling.navLink} to="/">
                  <div className={styling.text}>Login/Logout</div>
                </Link>
              </div>
              <div id={styling.col} className="col-md-1" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
