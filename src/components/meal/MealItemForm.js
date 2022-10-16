import classes from "./MealItemForm.module.css";
import Input from "../UI/input/Input";
let MealItemForm = (props) => {
  let handlerForm = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={handlerForm}>
      <Input label="Amount" id={props.id} type="number" defaultValue="1" />
      <button>+Add</button>
    </form>
  );
};
export default MealItemForm;
