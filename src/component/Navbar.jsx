
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/themeSlice";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useTheme = useSelector((store)=> store.theme.theme);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
  const toggleTheme = () => {
    dispatch(setTheme());
  };

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };
  return (
    <div className={`fixed top-0 z-20 w-full ${useTheme ? "bg-gray-700" : "bg-white"}`}>
      <header className="flex justify-between items-center py-4 px-10 shadow-2xl">
        <img className="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s" alt="" />
        <ul className={`flex font-bold text-xl ${useTheme ? "text-white" : "text-black"} gap-20`}>
          <Link to="/cart"><li className="cursor-pointer">Cart ({cartItems.length})</li></Link>
          <li className="cursor-pointer">Login</li>
          <li
            onClick={toggleTheme}
            className="cursor-pointer px-2 border rounded hover:bg-gray-600 transition"
          >
            {useTheme === true ? "🌙 Dark" : "☀️ Light"}
          </li>
           {isLoggedIn ? (
            <li className="cursor-pointer" onClick={handleLogout}>Logout</li> 
          ) : (
            <Link to="/login"><li className="cursor-pointer">Login</li></Link>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
