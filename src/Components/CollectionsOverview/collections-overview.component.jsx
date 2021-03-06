import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview/collectionPreview.component';

import './collections-overview.styles.sass';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collectionsOverview'>
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
