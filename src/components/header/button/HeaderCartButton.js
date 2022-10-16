import { Fragment, useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

let HeaderCartButton = (props) => {
  let renderingModal = () => {
    props.onSetModal(true);
  };
  return (
    <button className={classes.button} onClick={renderingModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
