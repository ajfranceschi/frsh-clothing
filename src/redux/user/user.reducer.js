import { UserActionTypes } from './user.types';
// when the reducer is called, the store passes the current state to it.
// The first time the reducer is called the store sends an empty state
// therefore we need to create an initial state to be used if
// something the state coming in is empty (the same thing as
// this.setState() in the constructor in app.js)
const INITIAL_STATE = {
  currentUser: null
};

// set the default value for currentState
const userReducer = (currentState = INITIAL_STATE, action) => {
  // return the state we want based on the action:
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      };

    default:
      return currentState;
  }
};

export default userReducer;
