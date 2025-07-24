import EcommerceApp from "./component/EcommerceApp"
import { CartProvider } from "./context/CartContext"
import ProductDataProvider from "./context/ProductDataContext"

function App() {

  return (
    <CartProvider>
      <ProductDataProvider>
        <EcommerceApp/>
      </ProductDataProvider>
    </CartProvider>
  )
}

export default App
