import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import Context from "../../Context";
let MealItem = (props) => {
  let ctx = useContext(Context);
  let price = `$${props.price.toFixed(2)}`;
  let addToCart = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};
export default MealItem;
