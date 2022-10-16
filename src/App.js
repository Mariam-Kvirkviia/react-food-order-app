import Header from "./components/header/Header";
import { Fragment, useState } from "react";
import Meals from "./components/meal/Meals";
import Modal from "./components/meal/Modal";
let App = () => {
  let [showModal, setModal] = useState(false);
  let renderingModal = (e) => {
    setModal(e);
  };
  return (
    <Fragment>
      <Header onSetModal={renderingModal} />
      <Meals />
      {showModal && <Modal onSetModal={renderingModal} />}
    </Fragment>
  );
};
export default App;
