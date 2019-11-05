import React from 'react';
import './shop.styles.sass';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../Components/CollectionPreview/collectionPreview.component';


const ShopPage = ({ collections }) => {
    return (
        <div className='shopPage'>
            {collections.map(({ id, title, items }) => {
                return <CollectionPreview key={id} items={items} title={title} />;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
