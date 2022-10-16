import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import Context from "../../Context";
import CartItems from "./CartItem";
let Cart = (props) => {
  let ctx = useContext(Context);
  let totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  return (
    <Fragment>
      <div className={classes["cart-items"]}>
        <CartItems carts={ctx} />
      </div>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onSetModal}>
          Close
        </button>
        {ctx.totalAmount !== 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Fragment>
  );
};
export default Cart;
