import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (rootReducerState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...rootReducerState,
        collections: action.payload
      };
    default:
      return rootReducerState;
  }
};

export default shopReducer;
