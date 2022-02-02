import { Component } from 'react';
//import inventory from './inventory.ES6';

class SaladSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateParent(this.props.property, event.target.value);
  }

  render() {
    return (
        <label>
          {this.props.text}
          <select value={this.props.value} className="form-select" onChange={this.handleChange}>
            {Object.keys(this.props.inventory)
              .filter(name => this.props.inventory[name][this.props.property])         
              .map(name => 
                <option key={name} value={name}> {name}, {this.props.inventory[name]['price']} kr </option>)}

          </select>
        </label>
    );
  }

}
export default SaladSelect;