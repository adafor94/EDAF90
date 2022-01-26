import { Component } from 'react';
import SaladSelect from './SaladSelect';

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let extras = Object.keys(this.props.inventory).filter(name => this.props.inventory[name].extra);
    return (
      <div className="continer col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <h2>Välj innehållet i din sallad</h2>
          {extras.map(name => <div key={name} className="col-4">{name}</div>)}
      </div>

      <SaladSelect text={'Välj bas:'} property={'foundation'} /> 
      <SaladSelect text={'Välj protein:'} property={'protein'} /> 
      <SaladSelect text={'Välj dressing:'} property={'dressing'} /> 

    </div>
    
    );
  }

}
export default ComposeSalad;