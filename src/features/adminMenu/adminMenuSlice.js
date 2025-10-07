import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, getProducts, deleteCategory, updateCategory, createCategory } from "../../services/api";


// Este thunk buscara categorias y productos en palalelo para mas eficiencia
export const fetchAdminMenuData = createAsyncThunk( 
  'adminMenu/fetchData',
  async () => {
    const [ categoriesRes, productsRes ] = await Promise.all([
      getCategories(),
      getProducts()
    ]);
    return { categories: categoriesRes.data, products : productsRes.data }; 
  } 
);

//Tunk para eliminar categoria 
export const deleteCategoryAsync = createAsyncThunk( 
  'adminMenu/deleteCategory',
   async (categoryId) => {
   await deleteCategory(categoryId); 
   return categoryId; 
  }
)

//Thunk para actualizar categoria 
export const updateCategoryAsync = createAsyncThunk(
  'adminMenu/updateCategory',
   async ({ id, name }) => {
   const response = await updateCategory({ id, name });
   return response.data;
  }
);

//Tuhunk para crear categoria 

export const createCategoryAsync = createAsyncThunk(
  'adminMenu/createCategory',
  async({name}) => {
    const response = await createCategory({name});
    return response.data;
  }
)

const initialState = { 
  categories: [],
  products: [],
  selectedCategoryId : null,
  status: 'idle', // ' idle' | 'loading' | ' succeeded' | 'failed' 
  error: null,
};

const adminMenuSlice = createSlice( { 
  name: 'adminMenu',
  initialState,

  //Reducers sincronos : para acciones que no dependen de la API 
  reducers: { 
    setSelectedCategory(state, action){ 
      state.selectedCategoryId = action.payload;
    },
  },

  //Reducers asinccronos : para manejar los estados del thunk (cargando,exito, error )
  extraReducers: (builder) => { 
    builder
      .addCase(fetchAdminMenuData.pending , (state) => { 
        state.status = 'loading';
      })
      .addCase(fetchAdminMenuData.fulfilled, (state, action) => { 
        state.status = 'succeeded';
        //Guardando los datos en el estado 
        state.categories  = action.payload.categories;
        state.products = action.payload.products;
      })
      .addCase(fetchAdminMenuData.rejected, (state, action) => { 
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.categories = state.categories.filter(cat => cat.id !== action.payload);
      })
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
          const index = state.categories.findIndex(cat => cat.id === action.payload.id);
             if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(createCategoryAsync.fulfilled, (state, action) => { 
        state.categories.push(action.payload);
      })
  },
});

export const { setSelectedCategory } =adminMenuSlice.actions;
export default adminMenuSlice.reducer;

