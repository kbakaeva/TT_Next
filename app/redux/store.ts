// import { compose, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
// import combineReducer from './combineReducer';
// import { persistStore } from 'redux-persist';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(

//   combineReducer,
//   compose(composeWithDevTools(applyMiddleware(...[sagaMiddleware]))),
// );
// export const persisStore = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
