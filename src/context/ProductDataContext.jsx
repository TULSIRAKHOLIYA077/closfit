import { createContext, useContext, useEffect, useState } from "react"

const ProductDataContext = createContext();

export const useProductData = () =>useContext(ProductDataContext);

const ProductDataProvider = ({children}) => {
    const [apiProducts, setApiProducts] = useState([]);
    const [customProducts, setCustomProducts] = useState([]);
    const [fullList, setFullList] = useState([]);

    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setApiProducts(data));
  }, []);

  useEffect(() => {
    setFullList([...apiProducts, ...customProducts]);
  }, [apiProducts, customProducts]);


  const addProduct = (product) => {
      setCustomProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    };

  return (
    <ProductDataContext.Provider value={{addProduct, fullList, customProducts}}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductDataProvider
