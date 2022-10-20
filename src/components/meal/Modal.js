import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import Cart from "../cart/Cart";

let Backdrop = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <Cart onSetModal={props.onSetModal} onClear={props.onClear} />
      </div>
    </div>
  );
};
let Modal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop onSetModal={props.onSetModal} onClear={props.onClear} />,
        document.getElementById("backdrop")
      )}
    </div>
  );
};
export default Modal;
