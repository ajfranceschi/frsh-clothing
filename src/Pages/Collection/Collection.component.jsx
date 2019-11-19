import React from 'react';
import './Collection.styles.sass';
import { connect } from 'react-redux';
import CollectionItem from './../../Components/CollectionItem/collectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collectionPage'>
            <h2 className='title'>{`${title}`}</h2>
            <div className='items'>
                {items.map(item => {
                    return <CollectionItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);
