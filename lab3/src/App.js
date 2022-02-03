import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import inventory from './inventory.ES6';

import {Component} from 'react';
import ComposeSalad from './ComposeSalad';
import ViewCart from './ViewCart';
import { Link } from "react-router-dom"

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
        <Header />  
        {
        // Header()  Why not like this? 
        }

        <Navbar/> 

        {this.renderPageContent()}
        <Footer /> 
      </div>
    );
    }

  renderPageContent(){
    return(
      <div> 
        <ComposeSalad inventory={inventory} addSaladToCart = {this.addSaladToCart} />    
        <ViewCart order={this.state.shoppingCart} />  
      </div>
    );
  }
}

function Footer() {
  return(
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>
  )
}

function Header() {
  return(
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Min egen salladsbar</span>
    </header>
  )
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
    </ul>);
}

  
export default App;
