import { Component } from "react";
//import inventory from './inventory.ES6';
import { Link } from "react-router-dom";

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
      <div id="checkbox" className="form-check">
        {this.props.text}
        {Object.keys(this.props.inventory)
          .filter((name) => this.props.inventory[name][this.props.property])
          .map((name) => (
            <div key={name}>
              <input
                type="checkbox"
                onChange={this.handleClick}
                id={name}
                name={name}
                checked={this.props?.values[name] || false}
              />
              <label>
                <Link className="nav-link" to={"/view-ingredient/" + name}>
                  {name + ", " + this.props.inventory[name]["price"] + " kr"}{" "}
                </Link>
              </label>
            </div>
          ))}
      </div>
    );
  }
}
export default SaladCheckbox;
