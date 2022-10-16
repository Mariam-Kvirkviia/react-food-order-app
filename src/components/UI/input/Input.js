import classes from "./Input.module.css";
import React from "react";
let Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}> {props.label}</label>
      <input
        id={props.id}
        type={props.type}
        defaultValue={props.defaultValue}
        ref={ref}
        min={props.min}
      />
    </div>
  );
});
export default Input;
