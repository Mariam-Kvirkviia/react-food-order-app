import styles from "./MealItemForm.module.css";
import Input from "../UI/input/Input.js";
import { useRef } from "react";

let MealItemForm = (props) => {
  let formRef = useRef();
  let handlerForm = (event) => {
    event.preventDefault();
    let enteredAmount = formRef.current.value;
    if (+enteredAmount.trim().length === 0) {
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={handlerForm}>
      <Input
        ref={formRef}
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
