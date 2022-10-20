import { useState } from "react";

let useCustom = (validateValue) => {
  let [enteredValue, setValue] = useState("");
  let [touched, setTouched] = useState(false);
  let isvalid = validateValue(enteredValue);
  let blurValue = () => {
    setTouched(true);
  };
  let changeValue = (event) => {
    setValue(event.target.value);
  };
  let resetValue = () => {
    setTouched(false);
    setValue("");
  };

  return { enteredValue, touched, isvalid, blurValue, changeValue, resetValue };
};
export default useCustom;
