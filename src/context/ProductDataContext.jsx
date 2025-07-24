import { createContext, useContext, useState } from "react"

const ProductDataContext = createContext();

export const useProductData = () =>useContext(ProductDataContext);

const ProductDataProvider = ({children}) => {

  const [customProducts, setCustomProducts] = useState([]);

  const addProduct = (product)=>{
    setCustomProducts([...customProducts, { ...product, id: Date.now() }])
  }
  return (
    <ProductDataContext.Provider value={{addProduct, customProducts}}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductDataProvider