import React from "react";
import shopData from "./shop.data";
import './shop.styles.sass'
import CollectionPreview from "../../Components/CollectionPreview/collectionPreview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData
    };
  }
  render() {
    const collections = this.state.collections;
    return (
      <div className="shopPage">
        {collections.map(({ id, title, items }) => {
          return (
              <CollectionPreview key={id} items={items} title={title} />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
