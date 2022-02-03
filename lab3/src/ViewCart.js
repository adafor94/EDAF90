import { Component } from "react";

class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id={"cart"} className="row h-200 p-5 bg-light border rounded-3">
        <label>
          <h2> Cart </h2>
          {this.props.order.map((salad) => (
            <li key={salad.uuid}>
              {" "}
              {"Sallad nr " +
                salad.uuid +
                ", " +
                salad.getPrice() +
                "kr, " +
                salad.getIngredients()}
            </li>
          ))}
        </label>
        <div className="">
          <strong> Total: </strong>
          {this.props.order.reduce((prev, current) => {
            return prev + current.getPrice();
          }, 0) + "kr"}
        </div>
      </div>
    );
  }
}
export default ViewCart;
