import { createSelector } from "reselect";

// Input selector:
const selectUser /*userReducer*/ = (rootReducer) /*state*/ => rootReducer.user;
// const selectCart /*cartReducer*/ = rootReducer /*state*/ => rootReducer.cart;

export const selectCurrentUser = createSelector(
  [selectUser /*, selectCart*/],
  (user /*, cart*/) => {
    return user.currentUser;
  }
);
