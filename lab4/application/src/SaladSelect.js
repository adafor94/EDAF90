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
    console.log(this.props.inventory); // test
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
          {/* {console.log(
            Object.keys(this.props.inventory).filter(
              (name) => this.props.inventory[name][this.props.property] adwad
            )
          )} */}
          {Object.keys(this.props.inventory)
            .filter((name) => this.props.inventory[name][this.props.property])
            .map((name) => (
              <option key={name} value={name}>
                {
                  // console.log("ingredient:", name, this.props.inventory[name])
                }
                {name}, {this.props.inventory[name]["price"]} kr{" "}
              </option>
            ))}
        </select>
        <div className="valid-feedback">well done</div>
        <div className="invalid-feedback">not so good</div>
      </div>
    );
  }
}
export default SaladSelect;
