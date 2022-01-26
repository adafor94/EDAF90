import { Component } from 'react';
import inventory from './inventory.ES6';

class SaladCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {checked : {} };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert(JSON.stringify(this.state.checked));
    this.setState(this.state.checked[event.target.name] = !this.state.checked[event.target.name])    
  }

  render() {
    return (
      <div>
        {this.props.text}
        {Object.keys(inventory)
          .filter(name => inventory[name][this.props.property])         
          .map(name => <div> <input type="checkbox" onChange={this.handleClick} id={name} name={name} /> <label for={name}> {name} </label> </div>)}

      </div>
    );
  }

}
export default SaladCheckbox;