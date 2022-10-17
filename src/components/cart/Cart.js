import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import Context from "../../Context";
import CartItems from "./CartItem";
let Cart = (props) => {
  let ctx = useContext(Context);
  let totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  let removeHandler = (id) => {
    ctx.removeItem(id);
  };
  let addHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  return (
    <Fragment>
      <div className={classes["cart-items"]}>
        {ctx.items.map((el) => {
          return (
            <CartItems
              key={el.id}
              name={el.name}
              price={el.price}
              amount={el.amount}
              onRemove={removeHandler.bind(null, el.id)}
              onAdd={addHandler.bind(null, el)}
            />
          );
        })}
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
