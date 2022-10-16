import classes from "./Input.module.css";

let Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}> {props.label}</label>
      <input
        id={props.id}
        type={props.type}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};
export default Input;
