import styles from "./Cart.module.css";
import CartItem from "./CartItem.js";
import Modal from "../meal/Modal.js";
import Context from "../Context.js";
import { useContext } from "react";
let Cart = (props) => {
  let carts = useContext(Context);
  console.log(carts);
  let hasItems = carts.items.length > 0;
  let renderingCart = () => {
    props.onhideCart(true);
  };
  let remove = () => {};
  let add = () => {};
  return (
    <Modal onClick={props.onhideCart}>
      <div className={styles["cart-items"]}>
        <CartItem carts={carts} onRemove={remove} onAdd={add} />
      </div>
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <h3>${carts.totalAmount.toFixed(2)}</h3>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={renderingCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}> Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
