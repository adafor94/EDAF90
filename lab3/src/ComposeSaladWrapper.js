import { useNavigate } from "react-router-dom";
import ComposeSalad from "./ComposeSalad.js";

function ComposeSaladWrapper(props) {
  const navigate = useNavigate();
  return <ComposeSalad navigate={navigate} {...props} />;
}

export default ComposeSaladWrapper;
