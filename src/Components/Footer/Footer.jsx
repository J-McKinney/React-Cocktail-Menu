import React from "react";
import styling from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}>
          <div id={styling.row} className="row">
            <div id={styling.col} className="col-md-6">
              <div className={styling.text}>Footer1</div>
              {/* <div className={styling.text}>{props.firstName}</div> */}
            </div>
            <div id={styling.col} className="col-md-6">
              <div className={styling.text}>Footer2</div>
              {/* <div className={styling.text}>{props.secondName}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
