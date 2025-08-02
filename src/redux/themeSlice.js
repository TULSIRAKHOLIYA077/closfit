import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState:{
    theme: true
  },
  reducers:{
    setTheme:(state)=>{
      state.theme = !state.theme
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
