import shopData from './shop.data'

const INITIAL_STATE = {
    collections: shopData
};

const shopReducer = (rootReducerState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return rootReducerState;
    }
};

export default shopReducer;



