// store.js
import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './features/cars/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
