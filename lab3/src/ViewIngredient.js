import { useParams } from "react-router-dom";

function ViewIngredient(props) {
  const ingredient = props.inventory[useParams().name];

  if (!ingredient) {
    return <div> Sorry, page not found </div>;
  } else {
    return Object.keys(ingredient).map((key) => (
      <div> {key + " : " + ingredient[key]} </div>
    ));
  }
}

export default ViewIngredient;
