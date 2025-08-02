import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import themeProducer from "./themeSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    theme: themeProducer,
    auth: authReducer
  },
});

export default store;
