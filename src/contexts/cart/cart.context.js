import { createContext } from "react";

const CartContext = createContext({
  hidden: true,
  toogleHidden: () => {},
});

export default CartContext;
