import classes from "./Cart.module.css";
import { Fragment, useContext, useState, useEffect } from "react";
import Context from "../../Context";
import CartItems from "./CartItem";
import Chekout from "./Checkout";
let Cart = (props) => {
  let [order, setOrder] = useState(false);
  let ctx = useContext(Context);
  let totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      setOrder(false);
    }
  }, [ctx.items.length]);
  let removeHandler = (id) => {
    ctx.removeItem(id);
  };
  let addHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  let orderHandler = () => {
    setOrder(true);
  };

  let submitOrder = (data) => {
    fetch("https://food-app-19d70-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify({ user: data, orderedItems: ctx.items }),
    });
  };
  let modalActions = (
    <div className={classes.actions}>
      <button className={classes[`button--alt`]} onClick={props.onSetModal}>
        Close
      </button>
      {console.log(ctx.totalAmount)}
      {ctx.totalAmount > 0 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
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
      {order && (
        <Chekout onSetModal={props.onSetModal} onSubmitOrder={submitOrder} />
      )}
      {!order && modalActions}
    </Fragment>
  );
};
export default Cart;
