import {createSlice} from "@reduxjs/toolkit";
import { ourWorkSpaceData } from "../../data/ourWorkSpaceData";

const initialState = {
  
ourWorkSpaceData,

}


const ourWorkSlice = createSlice({
 
  name: "ourWorkSpaceData",
  initialState,

});

export default ourWorkSlice.reducer;
