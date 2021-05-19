import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
import CartContext from "../../contexts/cart/cart.context";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [hidden, setHidden] = useState(true);
  const toogleHidden = () => setHidden(!hidden);

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
        <CartContext.Provider value={{ hidden, toogleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

export default Header;
