import { Component } from 'react';
import SaladCheckbox from './SaladCheckbox';
import SaladSelect from './SaladSelect';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Submitting salad');
    event.preventDefault();
  }

  render() {
    return (
      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>

          <SaladSelect text={'Välj bas:'} property={'foundation'} /> 
          <SaladSelect text={'Välj protein:'} property={'protein'} /> 
          <SaladSelect text={'Välj dressing:'} property={'dressing'} /> 
          <SaladCheckbox text={'Välj extras:'} property={'extra'} />

          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit" />
          </form>
        </div>
    </div>
    
    );
  }

}
export default ComposeSalad;