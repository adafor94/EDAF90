import { useParams } from "react-router-dom";

function ViewIngredient(props) {
  const ingredient = props.inventory[useParams().name];
  const name = useParams().name;

  return (
    <div key={name}>
      {" "}
      {Object.keys(ingredient).map((key) => (
        <div key={key}> {key + " : " + ingredient[key]} </div>
      ))}{" "}
    </div>
  );
}

export default ViewIngredient;
