import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartDropdownHidden } from "../../redux/cart/cart.selectors";

import CurrentUserContext from "../../contexts/current-user/current-user.context";

const Header = ({ cartHidden }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="header">
      <Link className="headr-logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="header-options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
