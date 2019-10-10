import {createSelector} from "reselect";

// Input selector:
const selectCart = rootReducerState => rootReducerState.cart;

// Output selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);