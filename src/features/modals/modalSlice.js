import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
  isOpen : false,
  title : '',
  contentKey : null,
  data: null, 
} 

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: { 
    openModal: (state, action) => { 
      state.isOpen = true;
      state.title = action.payload.title;
      state.contentKey = action.payload.contentKey;
      state.data = action.payload.data || null; 
    },
    closeModal: (state) => { 
      state.isOpen = false;
      state.title = '';
      state.contentKey = null;
      state.data = null;
    }
  }
});

export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
