import { Component } from 'react';
//import inventory from './inventory.ES6';

class SaladCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {items : Object.keys(this.props.inventory)
      .filter(name => this.props.inventory[name][this.props.property])         
      .map(name =>
        <div key={name}> 
          <input type="checkbox" onChange={this.handleClick} id={name} name={name} /> 
          <label> {name + ', ' + this.props.inventory[name]['price'] + ' kr'} </label> 
        </div>)}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.updateParent(event.target.name);   
  }

  render() {
    return (
      // is this the correct way to cache the result? Or should it rather be stored in composeSalad? 
      <form id="checkbox">
        {this.props.text}
          {this.state.items}   
      </form>
    );
  }
}
export default SaladCheckbox;