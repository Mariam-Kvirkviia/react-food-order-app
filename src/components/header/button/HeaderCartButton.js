import { Fragment, useContext } from "react";
import CartIcon from "./CartIcon.js";
import CartItem from "./CartItem";
import styles from "./HeaderCartButton.module.css";

let HeaderCartButton = (props) => {
  let renderingCart = () => {
    props.onshowCart(false);
  };
  return (
    <Fragment>
      <button className={styles.button} onClick={renderingCart}>
        <CartIcon /> Your cart <CartItem />
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
