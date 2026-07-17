import * as Drinks from "./Drinks.js";

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  toJSON() {
    return {
      name: this.name,
      location: this.location,
    };
  }

  orderDrink(drink) {
    if (drink instanceof Drinks.Drink) {
      drink.give();
    } else {
      console.log("Это не напиток");
    }
  }
}
