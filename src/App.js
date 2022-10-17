import Header from "./components/header/Header";
import { useState, useContext, useReducer } from "react";
import Context from "./Context";
import Meals from "./components/meal/Meals";
import Modal from "./components/meal/Modal";
let defaultCart = { items: [], totalAmount: 0 };
let reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let index = state.items.findIndex((item) => item.id === action.item.id);

    let existingCartitem = state.items[index];
    let updatedItems;
    let updatedItem;

    if (existingCartitem) {
      updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    let index = state.items.findIndex((item) => item.id === action.id);
    let existingCartitem = state.items[index];
    let updatedTotalAmount = state.totalAmount - existingCartitem.price;
    let updatedItems;
    let updatedItem;
    if (existingCartitem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCart;
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
