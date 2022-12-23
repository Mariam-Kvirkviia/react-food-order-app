import styles from "./CartItem.module.css";
import { Fragment } from "react";
import { getDefaultNormalizer } from "@testing-library/react";
let CartItem = (props) => {
  return (
    <Fragment>
      <h2>{props.name}</h2>
      <div className={styles["cart-item"]}>
        <div className={styles.summary}>
          <h2 className={styles.price}>{props.price.toFixed(2)}</h2>
          <h2 className={styles.amount}>{props.amount}x</h2>
        </div>
        <div className={styles.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
