import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Component } from "react";
import ViewCart from "./ViewCart";
import { Link, Routes, Route } from "react-router-dom";
import ComposeSaladWrapper from "./ComposeSaladWrapper";
import ViewIngredient from "./ViewIngredient";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: [], inv: {} };
    this.addSaladToCart = this.addSaladToCart.bind(this);

    this.serverUrl = "http://localhost:8080/";
  }
  parseStoredOrder() {
    const order = JSON.parse(window.localStorage.getItem("order"));
    console.log("ORDERS:");
    console.log(order);
    // if (order == null) {
    //   return [];
    // } else {
    //   return order;
    // }
  }
  componentDidMount() {
    const updatedInventory = {};
    const categories = ["foundations", "proteins", "dressings", "extras"];
    Promise.all(
      categories.map((category) => {
        this.fetchCategory(category)
          .then((ingredients) => {
            ingredients.forEach((ingredient) =>
              this.fetchIngredient(category, ingredient).then(
                (attributes) => (updatedInventory[ingredient] = attributes)
              )
            );
          })
          .catch((error) => {
            console.error(error);
          });
      })
    ).then((_) => {
      this.setState((state, props) => {
        return { inv: updatedInventory };
      });
    });
  }

  fetchIngredient(category, ingredient) {
    const url = this.serverUrl + category + "/" + ingredient;
    return this.safeFetchJson(url);
  }

  fetchCategory(category) {
    const url = this.serverUrl + category;
    return this.safeFetchJson(url);
  }

  addSaladToCart(salad) {
    this.setState((state, props) => {
      return { shoppingCart: [...state.shoppingCart, salad] };
    });
  }

  safeFetchJson(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`${url} returned status ${response.status}`);
      }
      return response.json();
    });
  }

  render() {
    this.parseStoredOrder();
    return (
      <div className="container py-4">
        <Header />
        {
          // Header()  Why not like this?
        }

        <Navbar />

        {this.renderRouter()}
        <Footer />
      </div>
    );
  }
  //
  renderRouter() {
    return (
      <Routes>
        <Route
          path="/"
          element={<div> Välkommen till min fina salladsbar </div>}
        />
        <Route
          path="/compose-salad"
          element={
            <ComposeSaladWrapper
              inventory={this.state.inv}
              addSaladToCart={this.addSaladToCart}
            />
          }
        />
        <Route
          path="/view-order"
          element={<ViewCart order={this.state.shoppingCart} />}
        />
        <Route
          path="/view-ingredient/:name"
          element={<ViewIngredient inventory={this.state.inv} />}
        />
        <Route path="*" element={<div> Sorry, page not found</div>} />
      </Routes>
    );
  }
}

function Footer() {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>
  );
}

function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Min egen salladsbar</span>
    </header>
  );
}

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/compose-salad">
          Komponera en sallad
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/view-order">
          Se din order
        </Link>
      </li>
    </ul>
  );
}

export default App;
