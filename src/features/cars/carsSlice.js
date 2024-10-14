import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    addCar(state, action) {
      state.push(action.payload);
    },
    removeCar(state, action) {
      return state.filter(car => car.name !== action.payload.name);
    },
  },
});

export const { addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
