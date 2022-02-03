import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import inventory from './inventory.ES6';

import {Component} from 'react';
import ComposeSalad from './ComposeSalad';
import ViewCart from './ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCart : []};

    this.addSaladToCart = this.addSaladToCart.bind(this);
  }

    addSaladToCart(salad) {    
      this.setState((state, props) => {
        return {shoppingCart : [...state.shoppingCart,salad]};
      })
    }

  render () {
    return (
      <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
      </header>

      <ComposeSalad inventory={inventory} addSaladToCart = {this.addSaladToCart} />    
      <ViewCart order={this.state.shoppingCart} />  
      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </div>
    );
    }
}

export default App;
