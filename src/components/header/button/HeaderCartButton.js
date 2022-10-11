import { Fragment, useContext } from "react";
import CartIcon from "./CartIcon.js";
import styles from "./HeaderCartButton.module.css";
import Context from "../../Context.js";
let HeaderCartButton = (props) => {
  let cartContent = useContext(Context);
 
  let numberOfCartItems = cartContent.items.reduce(
    (el, el2) => el + +el2.item,
    0
  );

  let renderingCart = () => {
    props.onshowCart(false);
  };
  return (
    <Fragment>
      <button className={styles.button} onClick={renderingCart}>
        <CartIcon /> Your cart{" "}
        <div className={styles.badge}>{numberOfCartItems}</div>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
