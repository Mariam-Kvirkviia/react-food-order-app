import styles from "./Input.module.css";
let Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.input.htmlFor}</label>
      <input {...props.input}></input>
    </div>
  );
};

export default Input;
