import { Component } from "react";

class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(window.localStorage.getItem("order"));
    event.preventDefault();
    const newArray = this.props.order.map((salad) =>
      Object.keys(salad.ingredients)
    );
    console.log(newArray);
    const url = "http://localhost:8080/orders/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArray),
    }).then((res) =>
      res.json().then((data) => {
        alert(JSON.stringify(data));
      })
    );
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
        <form onSubmit={this.handleSubmit} className="needs-validation">
          <input type="submit" value="Order" />
        </form>
      </div>
    );
  }
}
export default ViewCart;
