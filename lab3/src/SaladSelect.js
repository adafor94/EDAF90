import { Component } from "react";
//import inventory from './inventory.ES6';

class SaladSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.target.parentElement.classList.add("was-validated");
    this.props.updateParent(this.props.property, event.target.value);
  }

  render() {
    return (
      <div>
        {this.props.text}
        <select
          required
          value={this.props.value}
          className="form-select"
          onChange={this.handleChange}
        >
          <option value=""> Please select an option </option>
          {Object.keys(this.props.inventory)
            .filter((name) => this.props.inventory[name][this.props.property])
            .map((name) => (
              <option key={name} value={name}>
                {name}, {this.props.inventory[name]["price"]} kr{" "}
              </option>
            ))}
        </select>
        <div class="valid-feedback">well done</div>
        <div class="invalid-feedback">not so good</div>
      </div>
    );
  }
}
export default SaladSelect;
