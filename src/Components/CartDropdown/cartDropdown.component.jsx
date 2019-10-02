import React from 'react';
import CustomButton from "../CustomButton/customButton.component";
import './cartDropdown.styles.sass'

const CartDropdown = () => {
  return (
    <div className='cartDropdownDiv'>
      <div className="cartItems">

      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
};

export default CartDropdown;