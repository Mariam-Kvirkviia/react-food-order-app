import Header from "./components/header/Header";
import { useState, useReducer } from "react";
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
  if (action.type === "CLEAR") {
    return defaultCart;
  }
  return defaultCart;
};
let App = () => {
  let [cartState, dispatchCart] = useReducer(reducer, defaultCart);
  let addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  let removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  let clearCart = () => {
    dispatchCart({ type: "CLEAR" });
  };
  let [showModal, setModal] = useState(false);

  let showingModal = () => {
    console.log(showModal);
    setModal((prev) => !prev);
  };
  let hidingModal = () => {
    console.log(showModal);
    setModal((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        hiding: hidingModal,
        showing: showingModal,
      }}
    >
      <Header />
      <Meals />

      {showModal && <Modal onClear={clearCart} show={showModal} />}
    </Context.Provider>
  );
};
/**  let data = [
   
    {
      "description": "Finest fish and veggies",
      "id": "m1",
      "name": "Sushi",
      "price": 22.99
    },
    {
      "description": "A german specialty!",
      "id": "m2",
      "name": "Schnitzel",
      "price": 16.5
    },
    {
      "description": " American, raw, meaty",
      "id": "m3",
      "name": "Barbecue Burger",
      "price": 12.99
    },
    {
      "description": "Healthy...and green...",
      "id": "m4",
      "name": "Green Bowl",
      "price": 18.99
    }
  ]
 fetch("https://react-projects-160bb-default-rtdb.firebaseio.com/food.json",{method:"POST",body:JSON.stringify(data)}) */
export default App;
