import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedProduct: null, // Estado para guardar el producto seleccionado
};

const modalProductsSlice = createSlice({
  name: "modalProducts",
  initialState,

  reducers: {
    openModalProducts: (state, action) => {
      state.isOpen = true;
      state.selectedProduct = action.payload; // Guardar el producto cuando se abre el modal
    },
    closeModalProducts: (state) => {
      state.isOpen = false;
      state.selectedProduct = null; // Limpiar el producto cuando se cierra el modal
    },
  },
});

export const { openModalProducts, closeModalProducts } =
  modalProductsSlice.actions;

export default modalProductsSlice.reducer;
