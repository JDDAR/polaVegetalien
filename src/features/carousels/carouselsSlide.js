import { createSlice } from "@reduxjs/toolkit";

import { carrouselHome } from "../../data/carouselHome";

const initialState = {
  carrouselHome,
}

const carrouselSlice = createSlice({

    name:"carrouselHome",
    initialState,
})

export default carrouselSlice.reducer;
