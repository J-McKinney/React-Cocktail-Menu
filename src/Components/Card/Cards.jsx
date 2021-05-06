import React from "react";
import { Card } from "react-bootstrap";
import Buttons from "../Button/Buttons";
import styling from "./Card.module.css";

function Cards(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../assets/martiniGlass.svg" />
            <Card.Body>
              <Card.Title>Drink Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Buttons onClick={props.handleBtnClick}>Click Me</Buttons>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cards;
