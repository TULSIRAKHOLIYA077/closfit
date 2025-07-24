import { Link } from "react-router-dom";
import { useCart } from "../context/useCart"

const Navbar = () => {
  const {cartItems} = useCart();
  return (
    <div className="fixed top-0 z-20 w-full bg-gray-700">
      <header className="flex justify-between items-center py-4 px-10 shadow-2xl">
        <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s" alt="" />
        <div>
          <ul className="flex font-bold text-xl text-white gap-20">
            <Link to="/cart"><li className="cursor-pointer">Cart ({cartItems.length})</li></Link>
            <li className="cursor-pointer">Login</li>
          </ul>
        </div>

      </header>
    </div>
  )
}

export default Navbar