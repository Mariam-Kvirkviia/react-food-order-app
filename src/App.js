import Header from "./components/header/Header";
import { useState, useContext, useReducer } from "react";
import Context from "./Context";
import Meals from "./components/meal/Meals";
import Modal from "./components/meal/Modal";
let defaultCart = { items: [], totalAmount: 0 };
let reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = state.items.concat(action.item);
    let newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: newTotalAmount };
  }
  return 4;
};
let App = () => {
  let ctx = useContext(Context);
  let [cartState, dispatchCart] = useReducer(reducer, defaultCart);
  let addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
   
  };
  let removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  let [showModal, setModal] = useState(false);

  let showingModal = () => {
    setModal(true);
  };
  let hidingModal = () => {
    setModal(false);
  };
  return (
    <Context.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
      }}
    >
      <Header onSetModal={showingModal} />
      <Meals />
      {showModal && <Modal onSetModal={hidingModal} />}
    </Context.Provider>
  );
};
export default App;
