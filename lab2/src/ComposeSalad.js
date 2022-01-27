import { Component } from 'react';
import SaladCheckbox from './SaladCheckbox';
import SaladSelect from './SaladSelect';
import Salad from './Salad';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {foundation : '', protein : '', dressing : '', extra : {} };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStateFromChildren = this.updateStateFromChildren.bind(this);
    this.updateExtras = this.updateExtras.bind(this);
  }

  updateStateFromChildren(property, value) {
    const currentState = this.state;
    currentState[property] = value;
    this.setState(currentState);
  }

  updateExtras(value) {
    const currentState = this.state;
    currentState['extra'][value] = !currentState?.['extra'][value];
    this.setState(currentState);
  }

  handleSubmit(event) {
    event.preventDefault();    
    let salad = new Salad();
    Object.values(this.state)
      .forEach(field => (typeof field === 'object') 
        ? Object.keys(field).forEach(name => salad.add(name, this.props.inventory[name])) 
        : salad.add(field, this.props.inventory[field]));
    
    this.props.addSaladToCart(salad);
    this.setState({foundation : '', protein : '', dressing : '', extra : {}});

    document.getElementById("checkbox").reset();
    document.getElementById("select_foundation").reset();
    document.getElementById("select_protein").reset();
    document.getElementById("select_dressing").reset();
  }

  render() {
    return (
      <div id="Compose" className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>

          <SaladSelect id={"select_foundation"} text={'Välj bas:'} property={'foundation'} updateParent={this.updateStateFromChildren}  /> 
          <SaladSelect id={"select_protein"} text={'Välj protein:'} property={'protein'} updateParent={this.updateStateFromChildren} /> 
          <SaladSelect id={"select_dressing"} text={'Välj dressing:'} property={'dressing'}updateParent={this.updateStateFromChildren}  /> 
          <SaladCheckbox id={"checkbox"} text={'Välj extras:'} property={'extra'} updateParent={this.updateExtras}  /> 

          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit Salad" />
          </form>
        </div>
    </div>
    
    );
  }

}
export default ComposeSalad;