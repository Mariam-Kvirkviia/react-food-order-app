import classes from "./Cart.module.css";
import { Fragment } from "react";
let cartItems = (
  <ul className={classes[`cart-items`]}>
    {[{ id: 1, name: "pizza", amount: 2, price: 13 }].map((el) => {
      return <li key={el.id}>{el.name}</li>;
    })}
  </ul>
);
let Cart = (props) => {
  let renderingModal = () => {
    props.onSetModal(false);
  };
  return (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>23</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={renderingModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Fragment>
  );
};
export default Cart;
