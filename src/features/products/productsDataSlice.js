import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/productsData';

const initialState = {
  items: productsData,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
});

export default productsDataSlice.reducer;
