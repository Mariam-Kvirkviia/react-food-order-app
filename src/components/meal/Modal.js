import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
let Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
let Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};
let portalElement = document.getElementById("overlay");
let Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
