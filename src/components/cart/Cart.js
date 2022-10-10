import styles from "./Cart.module.css";
import CartItem from "./CartItem.js";
import Modal from "../meal/Modal.js";
import Context from "../Context.js";
let Cart = (props) => {
  let carts = [{ name: "Pizza", price: "$45", amount: "x2" }];
  let renderingCart = () => {
    props.onhideCart(true);
  };
  return (
    <Modal onClick={props.onhideCart}>
      <div className={styles["cart-items"]}>
        <CartItem carts={carts} />
      </div>
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <h3>$44444</h3>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={renderingCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
