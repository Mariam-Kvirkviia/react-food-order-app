import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.js";
import { useContext } from "react";
import Context from "../Context.js";
let MealItem = (props) => {
  let c = useContext(Context);
  let addToCart = (item) => {
    c.addItem({
      item: item,
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };
  let price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <h3 className={styles.description}>{props.description}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} />
      </div>
    </li>
  );
};
export default MealItem;
