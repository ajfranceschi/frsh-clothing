import { createSelector } from 'reselect';

// make selector input
const selectShop = rootReducerState => rootReducerState.shop;

// make selectors for output
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// selector to convert the shopData object into an array for use with the collections overview
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
