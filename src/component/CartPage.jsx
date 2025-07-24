import { FaXmark } from "react-icons/fa6";
import { useCart } from "../context/useCart"

const CartPage = () => {
  const {cartItems, removeItem} = useCart();
  return (
    <div className="pt-30 min-h-screen max-h-fit">
      <h2 className="text-2xl font-bold mb-4 text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {cartItems.map((item, index) => (
            <div key={index} className="p-4 rounded-lg w-60 bg-white relative">
              <img src={item.image} alt={item.name} className="h-32 mx-auto rounded" />
              <h3 className="font-bold text-lg mt-2">{item.name}</h3>
              <p className="text-sm">Price: ${item.price}</p>
              <FaXmark className="text-red-700 text-xl absolute z-20 top-4 right-4 cursor-pointer" onClick={()=>removeItem(item.id)}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartPage