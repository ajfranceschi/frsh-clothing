export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

    //remove from cart if itemQuantity is 1
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
    }

    // if existingCartItem's quantity is greater than 1
    return cartItems.map(cartItem =>
        cartItem.id === itemToDecrease.id
            ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1
              }
            : cartItem
    );
};

export const increaseItemQuantity = (cartItems, itemToIncrease) => {
    // return a new array of cart items
    return cartItems.map(item =>
        item.id === itemToIncrease.id
            ? {
                  ...itemToIncrease,
                  quantity: itemToIncrease.quantity + 1
              }
            : itemToIncrease
    );
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
};
