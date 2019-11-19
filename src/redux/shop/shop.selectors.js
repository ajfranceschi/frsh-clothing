import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

// make selector input
const selectShop = rootReducerState => rootReducerState.shop;

// make selectors for output
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections =>
            collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    );
