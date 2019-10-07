import React from "react";
import CustomButton from "../CustomButton/customButton.component";
import "./cartDropdown.styles.sass";
import CartItem from "../CartItem/cartItem.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cartDropdownDiv">
      <div className="cartItems">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = rootReducerState => {
  return {
    cartItems: selectCartItems(rootReducerState)
  };
};

export default connect(mapStateToProps)(CartDropdown);
