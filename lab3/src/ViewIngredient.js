import { useParams } from "react-router-dom";

function ViewIngredient(props) {
  const ingredient = props.inventory[useParams().name];
  return Object.keys(ingredient).map((key) => (
    <div> {key + " : " + ingredient[key]} </div>
  ));
}

export default ViewIngredient;
