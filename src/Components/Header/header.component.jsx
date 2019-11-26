import React from "react";
import {HeaderContainer, HeaderLink, /*HeaderLinkDiv,*/ HeaderLinksContainer, LogoContainer} from './header.styles';
// import { Link } from "react-router-dom";
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
    <HeaderContainer className="header">
      <LogoContainer to={"/"} className="logoContainer">
        <Logo className="logo" />
      </LogoContainer>
      <HeaderLinksContainer className="headerLinks">
        <HeaderLink className="headerLink" to={"/shop"}>
          SHOP
        </HeaderLink>
        <HeaderLink className="headerLink" to={"/contact"}>
          CONTACT
        </HeaderLink>

        {currentUser ? (
          <HeaderLink as='div' className="headerLink" onClick={() => auth.signOut()}>
            SIGN OUT
          </HeaderLink>
        ) : (
          <HeaderLink className="headerLink" to={"/signin"}>
            SIGN IN
          </HeaderLink>
        )}
        <CartIcon />
      </HeaderLinksContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
