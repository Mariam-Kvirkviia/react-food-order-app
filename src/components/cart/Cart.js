import classes from "./Cart.module.css";
import { Fragment, useContext, useState, useEffect } from "react";
import Context from "../../Context";
import CartItems from "./CartItem";
import Chekout from "./Checkout";
let Cart = (props) => {
  let [order, setOrder] = useState(false);
  let [submitForm, setSubmitForm] = useState(false);
  let [didSubmit, setDidSubmit] = useState(false);
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
    setSubmitForm(true);
    fetch(
      "https://react-projects-160bb-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify({ user: data, orderedItems: ctx.items }),
      }
    );
    setSubmitForm(false);
    setDidSubmit(true);
    props.onClear();
  };
  let hiding = () => {
    ctx.hiding();
  };
  let modalActions = (
    <div className={classes.actions}>
      <button className={classes[`button--alt`]} onClick={hiding}>
        Close
      </button>
      {ctx.totalAmount > 1 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  let content = (
    <Fragment>
      {" "}
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
  let submmitingContent = <p>Sending order data...</p>;
  let didSubmitContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onSetModal}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {!submitForm && !didSubmit && content}
      {submitForm && submmitingContent}
      {!submitForm && didSubmit && didSubmitContent}
    </Fragment>
  );
};
export default Cart;
