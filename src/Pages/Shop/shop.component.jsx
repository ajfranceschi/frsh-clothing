import React from 'react';
import './shop.styles.sass';
import CollectionsOverview from '../../Components/CollectionsOverview/collections-overview.component';
import CollectionPage from '../Collection/Collection.component';
import { Route } from 'react-router-dom';

const ShopPage = ({match}) => {
    // console.log(match.path);
    return (
        <div className='shopPage'>

            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            {/*dynamically get the right category from the reducer so that it displays the correct page*/}
            {/*build pages using params. that are sent to the Category component*/}
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
};

export default ShopPage;
