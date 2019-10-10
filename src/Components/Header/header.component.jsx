import React from "react";
import "./header.styles.sass";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/cartIcon.component";
import CartDropdown from "../CartDropdown/cartDropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to={"/"} className="logoContainer">
        <Logo className="logo" />
      </Link>
      <div className="headerLinks">
        <Link className="headerLink" to={"/shop"}>
          SHOP
        </Link>
        <Link className="headerLink" to={"/contact"}>
          CONTACT
        </Link>

        {currentUser ? (
          <div className="headerLink" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="headerLink" to={"/signin"}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
