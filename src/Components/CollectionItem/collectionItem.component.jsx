import React from "react";
import "./collectionItem.styles.sass";
import CustomButton from "../CustomButton/customButton.component";
import {connect} from 'react-redux';
import { addItemToCart} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItemToCart}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className="collectionItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
        <div className="collectionFooter">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
      <CustomButton inverted='true' onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart : item => dispatch(addItemToCart(item))
  }
};

export default connect(null, mapDispatchToProps)(CollectionItem);
