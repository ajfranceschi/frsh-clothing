import React from "react";
import "./collectionPreview.styles.sass";
import CollectionItem from "../CollectionItem/collectionItem.component";
 
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return (
              <CollectionItem
                key={item.id}
                item={item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
