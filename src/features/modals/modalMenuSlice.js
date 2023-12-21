import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
  isOpen: false,
}

const modalMenuSlice = createSlice({
  name: "modalMenu",
  initialState,
  
  reducers: {
  
    openModalMenu: (state) => {
      state.isOpen = true;
      console.log(`Este es el menu ${state.isOpen}`);
    },
    closeModalMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const {openModalMenu, closeModalMenu,} = modalMenuSlice.actions;

export default modalMenuSlice.reducer;
