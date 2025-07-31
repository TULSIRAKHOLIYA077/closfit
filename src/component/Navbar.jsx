import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="fixed top-0 z-20 w-full bg-gray-700">
      <header className="flex justify-between items-center py-4 px-10 shadow-2xl">
        <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s" alt="" />
        <ul className="flex font-bold text-xl text-white gap-20">
          <Link to="/cart"><li className="cursor-pointer">Cart ({cartItems.length})</li></Link>
          <li className="cursor-pointer">Login</li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
