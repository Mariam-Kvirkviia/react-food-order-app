import classes from "./MealItemForm.module.css";
import Input from "../UI/input/Input";
import { useRef } from "react";
let MealItemForm = (props) => {
  let formRef = useRef();
  let handlerForm = (event) => {
    event.preventDefault();
    let enteredAmount = +formRef.current.value;
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={handlerForm}>
      <Input
        ref={formRef}
        label="Amount"
        id={props.id}
        type="number"
        min="1"
        defaultValue="1"
      />
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
