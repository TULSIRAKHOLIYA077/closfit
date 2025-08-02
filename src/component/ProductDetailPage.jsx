import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.product.productItems);
  const useTheme = useSelector((store)=> store.theme.theme);

  const product = productItems.find((p) => p.id.toString() === id.toString());

  if (!product) {
    return (
      <div className="flex justify-center items-center pt-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
dispatch(
  addToCart({
    id: product.id,
    thumbnail: product.thumbnail,
    title: product.title,
    price: product.price,
    description: product.description,
  })
);
  };

  return (
    <div className={`min-h-screen max-h-fit pt-30 ${useTheme ? "bg-gray-400" : "bg-white"} px-6`}>
      <div className="bg-white w-full max-w-2xl rounded-xl flex flex-col p-6 items-center mx-auto shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={product.thumbnail}
            className="w-full md:w-[30%] object-contain rounded-xl"
            alt={product.title}
          />
          <div className="w-full">
            <h2 className="font-bold text-2xl mb-2 text-gray-800">{product.title}</h2>
            {product?.rating?.rate && (
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Rating: </span> {product.rating.rate}
              </p>
            )}
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price: </span> ₹ {product.price}
            </p>
            {product?.category && (
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Category: </span> {product.category}
              </p>
            )}
          </div>
        </div>
        <p className="text-gray-700 mt-4 mb-6">{product.description}</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
