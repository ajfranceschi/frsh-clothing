import React from 'react';
import './shop.styles.sass';
import CollectionsOverview from '../../Components/CollectionsOverview/collections-overview.component';

const ShopPage = () => {
    return (
        <div className='shopPage'>
            <CollectionsOverview />
        </div>
    );
};

export default ShopPage;
