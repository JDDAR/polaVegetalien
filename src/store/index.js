import { configureStore } from "@reduxjs/toolkit";
import productsDataReducer from '../features/products/productsDataSlice';
import carruselReducer from '../features/carousels/carouselsSlide';
import ourWorkReducer from '../features/sections/ourWorkspaceSlice';
import modalMenuReducer from '../features/modals/modalMenuSlice';
import menuSpecificReducer from '../features/menuSpecific/menuSpecificSlice'
import adminMenuReducer from "../features/adminMenu/adminMenuSlice";
import categoriesReducer from '../features/categories/categorySlice';
import modalReducer from "../features/modals/modalSlice"; 
import productsReducer from '../features/products/productsSlice';


export const store = configureStore ({
  reducer: {
    productsData: productsDataReducer,
    carrouselHome: carruselReducer,
    ourWorkSpaceData : ourWorkReducer,
    modalMenu: modalMenuReducer,
    menuSpecificData: menuSpecificReducer,
    adminMenu : adminMenuReducer,
    modal: modalReducer,
    products: productsReducer,
    categories: categoriesReducer, 
  }
}); 
