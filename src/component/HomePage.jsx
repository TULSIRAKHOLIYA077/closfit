
// import { useEffect } from "react";
// import ProductList from "./ProductList";
// import { useDispatch, useSelector } from "react-redux";
// import { setProduct } from "../redux/productSlice";

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const productItems = useSelector(state => state.product.productItems);
//   const isApiLoaded = useSelector(state => state.product.isApiLoaded);

//   useEffect(() => {
//     const hasOnlyCustomProducts = productItems.every(item => item.id?.toString().startsWith("custom-"));

//     if (!isApiLoaded && productItems.length === 0) {
//       fetch("https://dummyjson.com/products")
//         .then(res => res.json())
//         .then(data => dispatch(setProduct(data.products)));
//     } else if (!isApiLoaded && hasOnlyCustomProducts) {
//       fetch("https://dummyjson.com/products")
//         .then(res => res.json())
//         .then(data => dispatch(setProduct(data.products)));
//     }
//   }, [dispatch, isApiLoaded, productItems]);

//   if (!productItems.length) {
//     return (
//       <div className="flex justify-center items-center pt-40">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-400 relative z-10 pt-40 min-h-screen max-h-fit">
//       <ProductList productList={productItems} />
//     </div>
//   );
// };

// export default HomePage;

import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const productItems = useSelector(state => state.product.productItems);
  const isApiLoaded = useSelector(state => state.product.isApiLoaded);
  const [apiError, setApiError] = useState(null); // NEW: state to store error

  useEffect(() => {
    const hasOnlyCustomProducts = productItems.every(item => item.id?.toString().startsWith("custom-"));

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products from API.");
        }
        const data = await response.json();
        dispatch(setProduct(data));
        setApiError(null); // clear error if successful
      } catch (error) {
        console.error("API Error:", error);
        setApiError("Failed to load products. Please try again later.");
      }
    };

    if (!isApiLoaded && (productItems.length === 0 || hasOnlyCustomProducts)) {
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
    <div className="bg-gray-400 relative z-10 pt-40 min-h-screen max-h-fit">
      <ProductList productList={productItems} />
    </div>
  );
};

export default HomePage;
