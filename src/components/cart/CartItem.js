import styles from "./CartItem.module.css";
import { Fragment } from "react";
let CartItem = (props) => {
  return (
    <Fragment >
      {props.carts.items.map((el, index) => {
        return (
          <Fragment key={index}>
            <h2>{el.name}</h2>
            <div className={styles["cart-item"]}>
              <div className={styles.summary}>
                <h2 className={styles.price}>{el.price.toFixed(2)}</h2>
                <h2 className={styles.amount}>{el.amount}x</h2>
              </div>
              <div className={styles.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CartItem;
