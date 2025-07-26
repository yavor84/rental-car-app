import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page, limit = 12, filters }, { rejectWithValue }) => {
    try {
      const response = await axios.get('/catalog', {
        params: {
          page,
          limit,
          ...filters,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
