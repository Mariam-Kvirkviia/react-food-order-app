import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./button/HeaderCartButton.js";
import meal from "./meal.jpg";
let Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>React Meals</h1>
        <HeaderCartButton onshowCart={props.onshowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meal} alt="meals" />
      </div>
    </Fragment>
  );
};
export default Header;
