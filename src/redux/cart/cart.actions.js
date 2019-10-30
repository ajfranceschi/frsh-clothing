import CartActionTypes from './cart.types';

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    };
};

export const addItemToCart = item => {
    return {
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    };
};

export const removeItemFromCart = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    };
};

export const decreaseItemQuantity = item => {
    return {
        type: CartActionTypes.DECREASE_CART_ITEM_QUANTITY,
        payload: item
    };
};

export const increaseItemQuantity = item => {
    return {
        type: CartActionTypes.INCREASE_CART_ITEM_QUANTITY,
        payload: item
    };
};
