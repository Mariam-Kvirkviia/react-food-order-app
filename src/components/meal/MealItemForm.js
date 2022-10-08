import styles from "./MealItemForm.module.css";
import Input from "../UI/input/Input.js";
let MealItemForm = () => {
  return (
    <form className={styles.form}>
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
