import React from "react";
import styles from "./Input.module.css";
let Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.input.htmlFor}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
