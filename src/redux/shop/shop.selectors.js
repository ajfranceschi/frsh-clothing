import { createSelector } from 'reselect';


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
            collections[collectionUrlParam]
    );
