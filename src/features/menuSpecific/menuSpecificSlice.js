import { createSlice } from "@reduxjs/toolkit";
import menuSpecificData  from "../../data/menuSpecificData";

const initialState = {
  menuSpecificData,
}

const menuSpecificSlice = createSlice ({

  name: "menuSpecific",
  initialState,

});

export default menuSpecificSlice.reducer;
