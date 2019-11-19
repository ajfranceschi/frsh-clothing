import React from 'react';
import './Collection.styles.sass';
import {connect} from 'react-redux';
import CollectionItem from './../../Components/CollectionItem/collectionItem.component';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {

    return (
        <div className="category">
            <h2>{`${collection.title.toUpperCase()}`}</h2>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
};

export default connect(mapStateToProps)(CollectionPage);