import React from "react";
import "./header.styles.sass";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/cartIcon.component";

const Header = ({ currentUser }) => {
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

        {
          currentUser ? 
          <div className='headerLink' onClick={() => auth.signOut()}>SIGN OUT</div> 
          : 
          <Link className="headerLink" to={"/signin"}>SIGN IN</Link>
        }
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (rootReducerState) => {
  return {
    // currentUser : rootReducer.userReducer.userReducerValue
    currentUser: rootReducerState.user.currentUser
  }
};
export default connect(mapStateToProps)(Header);
