import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import themeProducer from "./themeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    theme: themeProducer
  },
});

export default store;
