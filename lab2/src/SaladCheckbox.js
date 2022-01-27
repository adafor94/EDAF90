import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.updateParent(event.target.name);   
  }

  render() {
    return (
      <form id="checkbox">
        {this.props.text}
        {Object.keys(inventory)
          .filter(name => inventory[name][this.props.property])         
          .map(name => 
            <div> 
              <input type="checkbox" onChange={this.handleClick} id={name} name={name} /> 
              <label for={name}> {name + ', ' + inventory[name]['price'] + ' kr'} </label> 
            </div>)}
      </form>
    );
  }
}
export default SaladCheckbox;