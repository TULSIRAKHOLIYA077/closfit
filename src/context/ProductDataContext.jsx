// src/context/ProductDataContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ProductDataContext = createContext();
export const useProductData = () => useContext(ProductDataContext);

const ProductDataProvider = ({ children }) => {
  const [fullList, setFullList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFullList(data))
      .catch((err) => console.log("API error:", err));
  }, []);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setFullList((prev) => [...prev, newProduct]);
  };

  const deleteProduct = (id) => {
    setFullList((prev) => prev.filter((product) => product.id !== id));
  };

  const editProduct = (updatedProduct) => {
    setFullList((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductDataContext.Provider
      value={{ fullList, addProduct, deleteProduct, editProduct }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
