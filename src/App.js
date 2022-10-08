import Header from "./components/header/Header";
import Meals from "./components/meal/Meals";
import { Fragment, useState } from "react";
import Cart from "./components/cart/Cart.js";
function App() {
  let [closeCart, setCloseCart] = useState(false);
  let showCart = () => {
    setCloseCart(false);
  };
  let hideCart = () => {
    setCloseCart(true);
  };
  return (
    <Fragment>
      {!closeCart && <Cart onhideCart={hideCart} />}
      <Header onshowCart={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
