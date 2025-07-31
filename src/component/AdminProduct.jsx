import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/productSlice";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((state) => state.product);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="p-30">
      <h2 className="text-2xl font-bold mb-4">Admin Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productItems.map((product) => (
          <div key={product.id} className="rounded-lg p-4 shadow h-[400px] bg-white relative">
            <div>
              <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-contain mb-2 rounded" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mb-2 truncate">{product.description}</p>
              <p className="font-bold mb-2">₹ {product.price}</p>
            </div>
            <div className="flex gap-2 absolute bottom-5">
              <Link to={`/admin/edit/${product.id}`}>
                <button className="px-4 py-1 bg-yellow-500 text-white rounded cursor-pointer hover:bg-yellow-600">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProduct;
