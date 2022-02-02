import { Component } from 'react';

class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
      <div id={"cart"} className=""> 
        <label>
            {"Cart:"}
            {this.props.order.map(salad => 
                <li key={salad.uuid}> {'Sallad nr ' + salad.uuid + ', ' + salad.getPrice() + 'kr, ' + salad.getIngredients()}</li>)
            }
        </label>
      </div>
    );
  }
}
export default ViewCart;