import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateParent(this.props.property, event.target.value);
  }

  render() {
    return (
        <label>
          {this.props.text}
          <select value={this.state.value} onChange={this.handleChange}>

            {Object.keys(inventory)
                .filter(name => inventory[name][this.props.property])         
                .map(name => 
                  <option value={name}> {name}, {inventory[name]['price']} kr </option>)}

          </select>
        </label>
    );
  }

}
export default SaladSelect;