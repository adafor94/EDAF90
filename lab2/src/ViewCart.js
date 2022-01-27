import { Component } from 'react';

class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id={"cart"}> 
        <label>
            {"Cart:"}

            {this.props.order.map(salad => 
                <div key={salad.uuid}> {'Sallad nr ' + salad.uuid + ', ' + salad.getPrice() + 'kr, ' + salad.getIngredients()}</div>)
            }
        </label>
      </div>
    );
  }
}
export default ViewCart;