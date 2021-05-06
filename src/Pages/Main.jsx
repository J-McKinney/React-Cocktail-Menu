import React, { Component } from "react";

class Main extends Component {
  state = { drinkList: "" };

  componentDidMount() {
    console.log("componentDidMount: ");
    this.drinkUp();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }

  // https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
  drinkUp = () => {
    console.log("Hello World!!!");
  };

  render() {
    return (
      <>
        <div>
          <h1>Main</h1>
        </div>
      </>
    );
  }
}

export default Main;
