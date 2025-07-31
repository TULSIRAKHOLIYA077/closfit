import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = ({ thumbnail, name, price, dec, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-xs p-5 flex flex-col items-center text-gray-800">
      <img src={thumbnail} alt={name} className="w-full h-38 object-contain rounded-xl mb-4" />

      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{dec}</p>
        <p className="font-semibold text-gray-700 mt-1">💵 ${price}</p>

        <div className="flex gap-3 mt-4">
          <Link to={`/${id}`} className="flex-1">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition">
              View Details
            </button>
          </Link>
          <button
            onClick={() => dispatch(addToCart({ thumbnail, title: name, price, description: dec, id }))}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
