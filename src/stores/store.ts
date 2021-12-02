import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

const rootStore = {
  counter: counterReducer
};

const store = configureStore({
  reducer: rootStore
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;