import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./HomePage"
import ProductDetailPage from "./ProductDetailPage"
import CartPage from "./CartPage" 
import AddProductPage from "./AddProductPage"
import AdminProduct from "./AdminProduct"
import { useSelector } from "react-redux"
import LoginPage from "./LoginPage"

const EcommerceApp = () => {
  const useTheme = useSelector((store)=> store.theme.theme);

  return (
    <div className={`${useTheme ? "bg-gray-400" : "bg-white"}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path=":id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="admin/add" element={<AddProductPage/>} />
          <Route path="/admin/edit/:id" element={<AddProductPage />} />
          <Route path="/admin/product" element={<AdminProduct/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>      
      </Routes>
    </div>
  )
}

export default EcommerceApp
