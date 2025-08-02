import { createSlice } from "@reduxjs/toolkit";

const loadAuth = () => {
  try {
    const data = localStorage.getItem("isLoggedIn");
    return data ? JSON.parse(data) : false;
  } catch {
    return false;
  }
};

const saveAuth = (status) => {
  localStorage.setItem("isLoggedIn", JSON.stringify(status));
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: loadAuth(),
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      saveAuth(true); 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      saveAuth(false); 
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
