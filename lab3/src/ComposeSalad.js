import { Component } from "react";
import SaladCheckbox from "./SaladCheckbox";
import SaladSelect from "./SaladSelect";
import Salad from "./Salad";

class ComposeSalad extends Component {
  constructor(props) {
    super(props);
    this.state = { foundation: "", protein: "", dressing: "", extra: {} };

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
    currentState["extra"][value] = !currentState?.["extra"][value];
    this.setState(currentState);
  }

  handleSubmit(event) {
    event.preventDefault();

    let salad = new Salad();
    Object.values(this.state).forEach((field) =>
      typeof field === "object"
        ? Object.keys(field).forEach((name) =>
            salad.add(name, this.props.inventory[name])
          )
        : salad.add(field, this.props.inventory[field])
    );

    this.props.addSaladToCart(salad);
    this.setState({ foundation: "", protein: "", dressing: "", extra: {} });
    this.props.navigate("/view-order");
  }

  render() {
    return (
      <div id="Compose" className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>

          <form onSubmit={this.handleSubmit} class="needs-validation">
            <SaladSelect
              value={this.state.foundation}
              id={"select_foundation"}
              text={"Välj bas:"}
              property={"foundation"}
              updateParent={this.updateStateFromChildren}
              inventory={this.props.inventory}
            />
            <SaladSelect
              value={this.state.protein}
              id={"select_protein"}
              text={"Välj protein:"}
              property={"protein"}
              updateParent={this.updateStateFromChildren}
              inventory={this.props.inventory}
            />
            <SaladSelect
              value={this.state.dressing}
              id={"select_dressing"}
              text={"Välj dressing:"}
              property={"dressing"}
              updateParent={this.updateStateFromChildren}
              inventory={this.props.inventory}
            />
            <SaladCheckbox
              values={this.state.extra}
              id={"checkbox"}
              text={"Välj extras:"}
              property={"extra"}
              updateParent={this.updateExtras}
              inventory={this.props.inventory}
            />

            <input type="submit" value="Submit Salad" />
          </form>
        </div>
      </div>
    );
  }
}
export default ComposeSalad;
