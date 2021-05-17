import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...previousState,
        hidden: !previousState.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...previousState,
        cartItems: addItemToCart(previousState.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...previousState,
        cartItems: previousState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...previousState,
        cartItems: removeItemToCart(previousState.cartItems, action.payload),
      };
    default:
      return previousState;
  }
};

export default cartReducer;
