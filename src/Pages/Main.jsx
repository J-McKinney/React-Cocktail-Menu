import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = { drinkList: "" };

  componentDidMount() {
    console.log("componentDidMount: ");
    this.drinkUp();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }

  drinkUp = (e) => {
    // e.preventDefault();
    // https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita    // By Name
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a   // By First Letter
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka   // By Ingredient Name
    // https://www.thecocktaildb.com/api/json/v1/1/random.php   // By Random
    console.log("Hello Drinks!!!");
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
