import { v4 as uuidv4 } from "uuid";

class Salad {
  static instanceCounter = 0;
  constructor() {
    this["ingredients"] = {};
    this.uuid = uuidv4();
  }

  add(name, properties) {
    this.ingredients[name] = properties;
    return this;
  }
  remove(name) {
    delete this.ingredients[name];
  }

  getPrice() {
    return Object.values(this.ingredients).reduce(
      (prev, current) =>
        prev + (current.hasOwnProperty("price") && current.price),
      0
    );
  }

  count(property) {
    return Object.values(this.ingredients).reduce(
      (prev, current) => prev + current.hasOwnProperty(property),
      0
    );
  }
  getIngredients() {
    return Object.keys(this.ingredients).join(", ");
  }
}

Salad.getPrice = function (salad) {
  return Object.values(salad.ingredients).reduce(
    (prev, current) =>
      prev + (current.hasOwnProperty("price") && current.price),
    0
  );
};

Salad.getIngredients = function (salad) {
  return Object.keys(salad.ingredients).join(", ");
};

export default Salad;
