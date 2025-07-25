import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./HomePage"
import ProductDetailPage from "./ProductDetailPage"
import CartPage from "./CartPage" 
import AddProductPage from "./AddProductPage"
import AdminProduct from "./AdminProduct"

const EcommerceApp = () => {
  return (
    <div className="bg-gray-400">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path=":id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/admin/add" element={<AddProductPage/>} />
          <Route path="/admin/product" element={<AdminProduct/>} />
        </Route>      
      </Routes>
    </div>
  )
}

export default EcommerceApp