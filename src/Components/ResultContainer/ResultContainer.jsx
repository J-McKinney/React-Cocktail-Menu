import React from "react";
import styling from "./ResultContainer.module.css";

function ResultContainer(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}></div>
      </div>
    </>
  );
}

export default ResultContainer;
