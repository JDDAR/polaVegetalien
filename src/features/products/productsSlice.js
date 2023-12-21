import { createSlice } from "@reduxjs/toolkit";

import productsData from "../../data/productsData"

const initialState = {
  productsData,
}

const productSlice = createSlice({

  name: "product",
  initialState,

  reducers: {

    visibilityFilter: (state = 'All', action) => {
      switch(action.type) {
        case "SET_VISIBILITy_FILTER" : 
          return action.filter;
        default: 
          return state;
      }
    }
  }
});

export const {visibilityFilter} = productSlice.actions;

export default productSlice.reducer;


