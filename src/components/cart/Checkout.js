import classes from "./Checkout.module.css";
import useCustom from "../../UseCustom";
let Chekout = (props) => {
  let formIsValid = false;
  let textIsValid = (text) => text.trim() !== "";
  let code = (text) => text.trim().length > 6;
  let {
    enteredValue: enteredName,
    touched: touchedName,
    isvalid: enteredNameValid,
    blurValue: blurName,
    changeValue: changeName,
    resetValue: resetName,
  } = useCustom(textIsValid);
  let {
    enteredValue: enteredPostal,
    touched: touchedPostal,
    isvalid: enteredPostalValid,
    blurValue: blurPostal,
    changeValue: changePostal,
    resetValue: resetPostal,
  } = useCustom(code);
  let {
    enteredValue: enteredSity,
    touched: touchedSity,
    isvalid: enteredSityValid,
    blurValue: blurSity,
    changeValue: changeSity,
    resetValue: resetSity,
  } = useCustom(textIsValid);
  let {
    enteredValue: enteredStreet,
    touched: touchedStreet,
    isvalid: enteredStreetValid,
    blurValue: blurStreet,
    changeValue: changeStreet,
    resetValue: resetStreet,
  } = useCustom(textIsValid);

  let handlerForm = (event) => {
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
      resetName();
      resetPostal();
      resetSity();
      resetStreet();
    }
  };
  let error = <p className={classes.error}>Must not be empty!</p>;
  return (
    <form onSubmit={handlerForm} className={classes.form}>
      <div
        className={`${classes.control} ${
          !enteredNameValid && touchedName ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={blurName}
          onChange={changeName}
        />
        {!enteredNameValid && touchedName && error}
      </div>
      <div
        className={`${classes.control} ${
          !enteredStreetValid && touchedStreet ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onBlur={blurStreet}
          onChange={changeStreet}
        />
        {!enteredStreetValid && touchedStreet && error}
      </div>
      <div
        className={`${classes.control} ${
          !enteredPostalValid && touchedPostal ? classes.invalid : ""
        }`}
      >
        <label htmlFor="Postal code<">Postal code</label>
        <input
          type="text"
          id="Postal code"
          value={enteredPostal}
          onBlur={blurPostal}
          onChange={changePostal}
        />
        {!enteredPostalValid && touchedPostal && (
          <p className={classes.error}>Enter a valid postal code!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !enteredSityValid && touchedSity ? classes.invalid : ""
        }`}
      >
        <label htmlFor="Sity">Sity</label>
        <input
          type="text"
          id="Sity"
          value={enteredSity}
          onBlur={blurSity}
          onChange={changeSity}
        />
        {!enteredSityValid && touchedSity && error}
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
