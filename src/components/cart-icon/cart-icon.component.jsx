import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount, toogleCart }) => {
  return (
    <div className="cart-icon" onClick={toogleCart}>
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

const mapDispatchToProps = (dispatch) => ({
  toogleCart: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
