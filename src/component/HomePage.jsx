import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const productItems = useSelector((state) => state.product.productItems);
  const isApiLoaded = useSelector((state) => state.product.isApiLoaded);
  const [apiError, setApiError] = useState(null);
  const useTheme = useSelector((store)=> store.theme.theme);

  useEffect(() => {
    const hasOnlyCustomProducts = productItems.every((item) =>
      item.id?.toString().startsWith("custom-")
    );

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products from API.");
        const data = await response.json();
        dispatch(setProduct(data.products)); 
        setApiError(null);
      } catch (error) {
        console.error("API Error:", error);
        setApiError("Failed to load products. Please try again later.");
      }
    };

    if (!isApiLoaded || productItems.length === 0 || hasOnlyCustomProducts) {
      fetchProducts();
    }
  }, [dispatch, isApiLoaded, productItems]);

  if (apiError) {
    return (
      <div className="pt-40 min-h-screen flex justify-center items-center">
        <p className="text-red-600 text-xl font-semibold">{apiError}</p>
      </div>
    );
  }

  if (!productItems.length) {
    return (
      <div className="flex justify-center items-center pt-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={` ${useTheme ? "bg-gray-400" : "bg-white"} relative z-10 pt-40 min-h-screen max-h-fit`}>
      <ProductList productList={productItems} />
    </div>
  );
};

export default HomePage;
