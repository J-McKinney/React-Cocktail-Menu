import React from "react";
import { Button } from "react-bootstrap";
import styling from "./Button.module.css";

function Buttons(props) {
  return (
    <>
      <div className={styling.wrapping}>
        <Button className={styling.button}>{props.buttonName}</Button>
      </div>
    </>
  );
}

export default Buttons;
