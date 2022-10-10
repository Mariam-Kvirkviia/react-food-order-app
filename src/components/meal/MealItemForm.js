import styles from "./MealItemForm.module.css";
import Input from "../UI/input/Input.js";
import { useContext } from "react";

let MealItemForm = () => {
  let handlerForm = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handlerForm}>
      <Input
        input={{
          htmlFor: "Amount",
          id: Math.random(),
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
