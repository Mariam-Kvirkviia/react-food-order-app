import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
let Backdrop = () => {
  return <div className={styles.backdrop}></div>;
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
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
