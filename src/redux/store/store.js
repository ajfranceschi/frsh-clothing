import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import createSagaMiddleware from 'redux-saga';

// create
const sagaMiddleware = createSagaMiddleware();

// applyMiddlewares() expects the middlewares,
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

//add individual sagas:
// sagaMiddleware.run()

export const persistor = persistStore(store);

// export default {store, persistor};
