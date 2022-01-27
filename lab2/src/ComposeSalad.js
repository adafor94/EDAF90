import { Component } from 'react';
import SaladCheckbox from './SaladCheckbox';
import SaladSelect from './SaladSelect';

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
    currentState['extra'][value] = !currentState['extra'][value];
    this.setState(currentState);
  }

  handleSubmit(event) {
    event.preventDefault();    
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>

          <SaladSelect text={'Välj bas:'} property={'foundation'} updateParent={this.updateStateFromChildren}/> 
          <SaladSelect text={'Välj protein:'} property={'protein'} updateParent={this.updateStateFromChildren}/> 
          <SaladSelect text={'Välj dressing:'} property={'dressing'}updateParent={this.updateStateFromChildren}/> 
          <SaladCheckbox text={'Välj extras:'} property={'extra'} updateParent={this.updateExtras}/> 

          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit Salad" />
          </form>
        </div>
    </div>
    
    );
  }

}
export default ComposeSalad;