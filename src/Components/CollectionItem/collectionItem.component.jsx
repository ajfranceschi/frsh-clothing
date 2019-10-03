import React from "react";
import "./collectionItem.styles.sass";
import CustomButton from "../CustomButton/customButton.component";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collectionItem">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl}` }}
      ></div>
        <div className="collectionFooter">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      <CustomButton>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
