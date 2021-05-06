import React from "react";
import { Button } from "react-bootstrap";
import styling from "./Button.module.css";

function Buttons(props) {
  return (
    <>
      <div className={styling.wrapping}>
        <Button onClick={props.onClick} className={styling.button} {...props} />
      </div>
    </>
  );
}

export default Buttons;
