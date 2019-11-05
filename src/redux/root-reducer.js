import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from 'redux-persist';
import directoryReducer from './directory/directory.reducer';


//import type of persist storage store: (important to use the module name as below)
import storage from 'redux-persist/lib/storage'; /*localStorage*/
// import sessionStorage from 'redux-persist/lib/storage/session'; /*sessionStorage*/

// jsonObject that represents the possible configurations that we want for redux-persist to use
const persistConfig = {
  key: 'root',
  storage: storage, /*or sessionStorage*/
  whitelist: ['cart']  /*add the reducers you want to save in local or session Storage as strings*/
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);