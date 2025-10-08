import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, createProduct, updateProduct, deleteProduct, updateProductStatus } from "../../services/api";

// --- ASYNC THUNKS ---
export const fetchProductsAsync = createAsyncThunk(
 'products/fetchProducts',
  async () => {
    const response = await getProducts();
    return response.data;
  }
 );

export const createProductAsync = createAsyncThunk(
 'products/createProduct',
  async (productData) => {
    const response = await createProduct(productData);
    return response.data;
  }
);

export const updateProductAsync = createAsyncThunk(
  'products/updateProduct',
   async (productData) => {
    const response = await updateProduct(productData);
    return response.data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'products/deleteProduct',
   async (productId) => {
    await deleteProduct(productId);
    return productId; // Devolvemos el ID para saber cuál borrar del estado
  }
);

export const updateProductStatusAsync = createAsyncThunk(
  'products/updateProductStatus',
   async ({ id, isPublic }) => {
    const response = await updateProductStatus({ id, isPublic });
    return response.data;
  }
);

// --- SLICE ---
const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
     .addCase(fetchProductsAsync.pending, (state) => { state.status = 'loading'; })
     .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Create Product
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.items.push(action.payload); // Añadimos el nuevo producto a la lista
      })
      // Update Product (cubre tanto el estado como los detalles)
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const existingProductIndex = state.items.findIndex(p => p.id === updatedProduct.id);
        if (existingProductIndex !== -1) {
          state.items[existingProductIndex] = updatedProduct;
        }
      })
      .addCase(updateProductStatusAsync.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const existingProductIndex = state.items.findIndex(p => p.id === updatedProduct.id);
        if (existingProductIndex !== -1) {
          state.items[existingProductIndex] = updatedProduct;
       }
     })
      // Delete Product
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items = state.items.filter(p => p.id !== productId); // Creamos un nuevo array sin el producto borrado
      });
  }
});

export default productsSlice.reducer;


