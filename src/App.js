import Header from "./components/header/Header";
import Meals from "./components/meal/Meals";
import { useState, useReducer, useRef } from "react";
import Cart from "./components/cart/Cart.js";
import Context from "./components/Context.js";

let defaultCartState = {
  items: [],
  totalAmount: 0,
};
let cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = state.items.concat(action.item);
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
function App() {
  let mealRef = useRef();
  console.log(mealRef);
  let [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  let [closeCart, setCloseCart] = useState(true);
  let showCart = () => {
    setCloseCart(false);
  };
  let hideCart = () => {
    setCloseCart(true);
  };
  let addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  let removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  let cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <Context.Provider value={cartContext}>
      {!closeCart && <Cart onhideCart={hideCart} />}
      <Header onshowCart={showCart} />
      <main>
        <Meals ref={mealRef} />
      </main>
    </Context.Provider>
  );
}

export default App;
