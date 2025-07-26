import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useProductData } from "../context/ProductDataContext";

const Product = ({ image, name, price, dec, id }) => {
  const { addToCart } = useCart();
  const { deleteProduct } = useProductData();
  const location = useLocation();
  const isAdmin = location.pathname.includes("/admin/product");

  return (
    <div className="bg-gray-200 w-[300px] rounded-xl flex flex-col p-3 items-center">
      <img src={image} className="w-[90%] h-52 rounded-xl" alt="product" />
      <div className="mt-3 w-full">
        <h2 className="font-bold text-xl truncate">{name}</h2>
        <p><span className="font-bold">Price:</span> $ {price}</p>
        <p className="truncate mb-1">{dec}</p>
        <div className="flex gap-2">
          {!isAdmin && (
            <>
              <Link to={`/${id}`}>
                <button className="bg-gray-800 text-white p-2 rounded-lg">View Detail</button>
              </Link>
              <button className="bg-gray-800 text-white p-2 rounded-lg" onClick={() => addToCart({ image, name, price, dec, id })}>
                Add to cart
              </button>
            </>
          )}
          {isAdmin && (
            <>
              <Link to={`/admin/edit/${id}`}>
                <button className="bg-yellow-600 text-white p-2 rounded-lg">Edit</button>
              </Link>
              <button
                className="bg-red-600 text-white p-2 rounded-lg"
                onClick={() => {
                  const confirmDelete = confirm("Are you sure you want to delete?");
                  if (confirmDelete) deleteProduct(id);
                }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
