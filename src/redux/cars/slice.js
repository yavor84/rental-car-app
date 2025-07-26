import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    resetCars: state => {
      state.items = [];
      state.page = 1;
      state.totalPages = 1;
      state.error = null;
    },
    incrementPage: state => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items.push(...action.payload.cars);
        }
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export default carsSlice.reducer;
