import React from 'react';
import './cartIcon.styles.sass';
// import SVG:
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
// Bind redux action:
import { connect } from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = (props) => {
  return (
    <div className="cartIconDiv" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">0</span>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden : () => dispatch(toggleCartHidden())
  }
};

export default connect(null, mapDispatchToProps)(CartIcon);