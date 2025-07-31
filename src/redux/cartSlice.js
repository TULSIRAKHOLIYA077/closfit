import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (!exists) {
        state.cartItems.push(action.payload);
        saveCartToLocalStorage(state.cartItems); 
      } else {
        alert("Product is already in your cart!");
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state.cartItems); 
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
