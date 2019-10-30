import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';

// applyMiddlewares() expects the middlewares,
const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

// export default {store, persistor};