import Header from "./components/header/Header";
import Meals from "./components/meal/Meals";
import { useState, useReducer, useContext } from "react";
import Cart from "./components/cart/Cart.js";
import Context from "./components/Context.js";

let defaultCartState = {
  items: [],
  totalAmount: 0,
};
let cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      +state.totalAmount + +action.item.price * +action.item.item;

    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: +existingCartItem.item + +action.item.item,
      };

      updatedItems = [state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
function App() {
  let content = useContext(Context);
  content.totalAmount = defaultCartState.totalAmount;

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
        <Meals />
      </main>
    </Context.Provider>
  );
}

export default App;
