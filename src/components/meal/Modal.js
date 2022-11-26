import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import Cart from "../cart/Cart";
import Context from "../../Context";
import { useContext } from "react";
let Backdrop = (props) => {
  let { show } = useContext(Context);

  return (
    <div className={classes.backdrop}>
      <div className={`${classes.modal} ${classes.down} `}>
        <Cart onClear={props.onClear} />
      </div>
    </div>
  );
};
let Modal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop onClear={props.onClear} />,
        document.getElementById("backdrop")
      )}
    </div>
  );
};
export default Modal;
