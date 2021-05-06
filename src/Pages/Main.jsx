import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = {
    drinkList: "",
    // Drink
    drinkName: "",
    // Drink Name
    instructions: "",
    // Drink Instructions:
    thumbNail: "",
    // Drink Thumb Nail Pic
    drinkGlass: "",
    // Drink Glass
    ///////////////////////////////////////////////////////////////////////
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
    ingredient11: "",
    ingredient12: "",
    ingredient13: "",
    ingredient14: "",
    ingredient15: "",
    // Drink Ingredients
    ///////////////////////////////////////////////////////////////////////
  };

  componentDidMount() {
    // console.log("componentDidMount: ");
    this.drinkUp();
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate: ");
    // console.log(this.state.drinkList);
    // console.log(this.state.thumbNail);
    console.log(this.state.drinkName);
    // console.log(this.state.instructions);
    // console.log(this.state.ingredient1);
    // console.log(this.state.ingredient2);
    // console.log(this.state.ingredient3);
    // console.log(this.state.ingredient4);
    // console.log(this.state.ingredient5);
    // console.log(this.state.ingredient6);
    // console.log(this.state.ingredient7);
    // console.log(this.state.ingredient8);
    // console.log(this.state.ingredient9);
    // console.log(this.state.ingredient10);
    // console.log(this.state.ingredient11);
    // console.log(this.state.ingredient12);
    // console.log(this.state.ingredient13);
    // console.log(this.state.ingredient14);
    // console.log(this.state.ingredient15);
  }

  drinkUp = () => {
    // e.preventDefault();
    // https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita    // By Name
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a   // By First Letter
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka   // By Ingredient Name
    // https://www.thecocktaildb.com/api/json/v1/1/random.php   // Random Drink
    // console.log("drinkUp()");
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        this.setState({
          drinkList: res.data.drinks[0],
          // Drink ^|^
          drinkName: res.data.drinks[0].strDrink,
          // Drink Name ^|^
          instructions: res.data.drinks[0].strInstructions,
          // Drink Instructions ^|^
          thumbNail: res.data.drinks[0].strDrinkThumb,
          // Thumb Nail Pic ^|^
          drinkGlass: res.data.drinks[0].strGlass,
          // Drink Glass
          ingredient1: res.data.drinks[0].strIngredient1,
          ingredient2: res.data.drinks[0].strIngredient2,
          ingredient3: res.data.drinks[0].strIngredient3,
          ingredient4: res.data.drinks[0].strIngredient4,
          ingredient5: res.data.drinks[0].strIngredient5,
          ingredient6: res.data.drinks[0].strIngredient6,
          ingredient7: res.data.drinks[0].strIngredient7,
          ingredient8: res.data.drinks[0].strIngredient8,
          ingredient9: res.data.drinks[0].strIngredient9,
          ingredient10: res.data.drinks[0].strIngredient10,
          ingredient11: res.data.drinks[0].strIngredient11,
          ingredient12: res.data.drinks[0].strIngredient12,
          ingredient13: res.data.drinks[0].strIngredient13,
          ingredient14: res.data.drinks[0].strIngredient14,
          ingredient15: res.data.drinks[0].strIngredient15,
          // Drink Ingredients ^|^
        });
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
