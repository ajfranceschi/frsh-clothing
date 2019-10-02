import React from 'react';
import './cartIcon.styles.sass';
// import SVG:
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className="cartIconDiv">
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">0</span>
    </div>
  )
};

export default CartIcon;