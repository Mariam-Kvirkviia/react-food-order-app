import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
let Chekout = (props) => {
  let [formValidity, setFormValidity] = useState({
    name: false,
    street: false,
    code: false,
    sity: false,
  });
  let formIsValid = false;
  let textIsValid = (text) => text.trim() !== "";
  let code = (text) => text.trim().length > 6;
  let refName = useRef();
  let refStreet = useRef();
  let refPostal = useRef();
  let refSity = useRef();
  let handlerForm = (event) => {
    let enteredName = refName.current.value;
    let enteredStreet = refStreet.current.value;
    let enteredPostal = refPostal.current.value;
    let enteredSity = refSity.current.value;
    let enteredNameValid = textIsValid(enteredName);
    let enteredStreetValid = textIsValid(enteredStreet);
    let enteredSityValid = textIsValid(enteredSity);
    let enteredPostalValid = code(enteredPostal);
    setFormValidity({
      name: enteredNameValid,
      street: enteredStreetValid,
      code: enteredPostalValid,
      sity: enteredSityValid,
    });
    event.preventDefault();
    if (
      enteredNameValid &&
      enteredPostalValid &&
      enteredSityValid &&
      enteredStreetValid
    ) {
      formIsValid = true;
      let data = {
        name: enteredName,
        street: enteredStreet,
        code: enteredPostal,
        sity: enteredSity,
      };
      props.onSubmitOrder(data);
    }
  };
  let error = <p className={classes.error}>must not be empty!</p>;
  return (
    <form onSubmit={handlerForm} className={classes.form}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={refName} />
        {!formValidity.name && error}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={refStreet} />
        {!formValidity.street && error}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.code ? "" : classes.invalid
        }`}
      >
        <label htmlFor="Postal code<">Postal code</label>
        <input type="text" id="Postal code" ref={refPostal} />
        {!formValidity.code && (
          <p className={classes.error}>must be more than 6!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.sity ? "" : classes.invalid
        }`}
      >
        <label htmlFor="Sity">Sity</label>
        <input type="text" id="Sity" ref={refSity} />
        {!formValidity.sity && error}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onSetModal}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Chekout;
