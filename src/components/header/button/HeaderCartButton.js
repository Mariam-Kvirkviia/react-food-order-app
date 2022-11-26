import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import Context from "../../../Context";
let HeaderCartButton = (props) => {
  let ctx = useContext(Context);
  let numberOfCartsItems = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  let showing = () => {
    ctx.showing();
  };
  return (
    <button className={classes.button} onClick={showing}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartsItems}</span>
    </button>
  );
};
export default HeaderCartButton;
