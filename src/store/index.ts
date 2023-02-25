import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from '../reducer/rootReducer';
import logger from 'redux-logger';
import counterReducer from "../reducer/counter";

const middleware = [ ...getDefaultMiddleware(), logger ];

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store;