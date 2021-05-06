import React from "react";
import styling from "./Card.module.css";

function Card(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}></div>
      </div>
    </>
  );
}

export default Card;
