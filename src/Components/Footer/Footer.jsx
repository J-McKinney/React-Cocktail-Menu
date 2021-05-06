import React, { Component } from "react";
import styling from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={styling.wrapper}>
          <div className={styling.container}>
            <div id={styling.row} className="row">
              <div id={styling.col} className="col-md-6">
                <div className={styling.text}>Footer1</div>
              </div>
              <div id={styling.col} className="col-md-6">
                <div className={styling.text}>Footer2</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
