import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations.js';

const initialState = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
  brands: [],
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
