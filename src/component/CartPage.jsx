import { FaXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const useTheme = useSelector((store)=> store.theme.theme);

  return (
    <div className={`pt-32 min-h-screen px-6 ${useTheme ? "bg-gray-400" : "bg-white"} `}>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20 text-xl text-gray-600">Your cart is currently empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs p-5"
            >
              <button
                className="absolute top-3 right-3 text-red-600 hover:text-red-800"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <FaXmark className="text-xl cursor-pointer" />
              </button>

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg truncate text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <p className="text-base font-bold text-gray-700 mt-2">Price: ₹ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
