
import ProductList from "./ProductList";
import { useProductData } from "../context/ProductDataContext";

const HomePage = () => {
  const { fullList } = useProductData();

    if (!fullList) {
    return (
      <div className="flex justify-center items-center pt-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <div className="bg-gray-400 relative z-10 pt-40 min-h-screen max-h-fit">
      <ProductList productList={fullList}/>
    </div>
  )
}

export default HomePage