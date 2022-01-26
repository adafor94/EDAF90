import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'default value'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.text}
          <select value={this.state.value} onChange={this.handleChange}>

            {Object.keys(inventory)
                .filter(name => inventory[name][this.props.property])         
                .map(name => <option value={name}> {name}, {inventory[name]['price']} kr </option>)}

          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
export default SaladSelect;