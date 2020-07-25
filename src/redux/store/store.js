/**
 * @flow
 *
 * This file configures the Redux store
 *
 * To keep things simple, and because Firebase already acts as a state management solution,
 * we are only using Redux for the following:
 *
 * 1) `redux-form` integration
 * 2) Basic UI state, i.e. the loading modal
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import appReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  // //  blacklist:[]
  // whitelist: ['settings', 'timeOut', 'auth'],
};

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

const pR = persistReducer(persistConfig, rootReducer);

export const store = createStore(pR, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store, { timeout: 1000 });
