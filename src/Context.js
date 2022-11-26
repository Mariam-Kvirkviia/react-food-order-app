import React from "react";
let Context = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  hiding: () => {},
  showing: () => {},
  show: "",
});
export default Context;
