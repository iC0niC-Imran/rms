import React, { Component } from "react";
import Dishes from "../../Data/BodyData/Dishes";
import FoodItemDetails from "./FoodItemDetails";
import FoodMenuItems from "./FoodMenuItems";

class FoodMenu extends Component {
  state = {
    dishes: Dishes,
    dishDetails: null,
  };

  onDishSelect = (dish) => {
    this.setState({ dishDetails: dish });
  };
  render() {
    const foodmenu = this.state.dishes.map((food) => {
      return (
        <FoodMenuItems
          dish={food}
          key={food.id}
          onDishSelect={this.onDishSelect}
        />
      );
    });

    let fooddetails = null;
    if (this.state.dishDetails != null) {
      fooddetails = <FoodItemDetails dish={this.state.dishDetails} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{foodmenu}</div>
          <div className="col-6">{fooddetails}</div>
        </div>
      </div>
    );
  }
}

export default FoodMenu;
