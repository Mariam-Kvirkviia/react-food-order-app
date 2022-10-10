import Header from "./components/header/Header";
import Meals from "./components/meal/Meals";
import { useState } from "react";
import Cart from "./components/cart/Cart.js";
import Context from "./components/Context.js";
function App() {
  let [closeCart, setCloseCart] = useState(true);
  let showCart = () => {
    setCloseCart(false);
  };
  let hideCart = () => {
    setCloseCart(true);
  };
  let addItemToCart = (item) => {};
  let removeItemFromCart = (id) => {};
  let cartContext = {
    items: [],
    totalAmount: 0,
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
