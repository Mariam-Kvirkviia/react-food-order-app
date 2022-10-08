import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm.js";
let MealItem = (props) => {
  let price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <h3 className={styles.description}>{props.description}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
export default MealItem;
