import React from "react";
import "./cartItem.styles.sass";

// deconstruct the item as props for the Component
const CartItem = ({ item: { imageUrl, price, quantity, name } }) => {
  return (
    <div className="cartItemDiv">
      <img src={imageUrl} alt="item" />
      <div className="itemDetailsContainer">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
