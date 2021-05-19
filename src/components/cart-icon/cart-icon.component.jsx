import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({ itemCount }) => {
  const { toogleHidden } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toogleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// way 1
// const mapStateToProps = (state) => ({
//   // will run anytime when state is new object
//   itemCount: selectCartItemsCount(state),
// });

export default connect(mapStateToProps)(CartIcon);
