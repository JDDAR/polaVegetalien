import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productsSlice';
import carruselReducer from '../features/carousels/carouselsSlide';
import ourWorkReducer from '../features/sections/ourWorkspaceSlice';
import modalMenuReducer from '../features/modals/modalMenuSlice';
import menuSpecificReducer from '../features/menuSpecific/menuSpecificSlice'

export const store = configureStore ({
  reducer: {
    productsData: productReducer,
    carrouselHome: carruselReducer,
    ourWorkSpaceData : ourWorkReducer,
    modalMenu: modalMenuReducer,
    menuSpecificData: menuSpecificReducer,
  }
}); 
