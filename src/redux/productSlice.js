import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("productItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Save to localStorage
const saveToLocalStorage = (items) => {
  localStorage.setItem("productItems", JSON.stringify(items));
};

const initialState = {
  productItems: loadFromLocalStorage(),
  isApiLoaded: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const apiProducts = action.payload;

      const customProducts = state.productItems.filter(item =>
        item.id?.toString().startsWith("custom-")
      );

      state.productItems = [...apiProducts, ...customProducts];
      state.isApiLoaded = true;
      saveToLocalStorage(state.productItems);
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: `custom-${Date.now()}`,
      };
      state.productItems.push(newProduct);
      saveToLocalStorage(state.productItems);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.productItems.findIndex(
        (item) => item.id.toString() === id.toString()
      );
      if (index !== -1) {
        state.productItems[index] = {
          ...state.productItems[index],
          ...updatedProduct,
        };
        saveToLocalStorage(state.productItems);
      }
    },
    deleteProduct: (state, action) => {
      state.productItems = state.productItems.filter(
        (item) => item.id.toString() !== action.payload.toString()
      );
      saveToLocalStorage(state.productItems);
    },
  },
});

export const { setProduct, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
