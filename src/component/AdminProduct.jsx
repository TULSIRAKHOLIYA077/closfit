import { useProductData } from "../context/ProductDataContext";
import ProductList from "./ProductList";

const AdminProduct = () => {
  const { fullList } = useProductData();
  return (
    <div className="pt-40">
      <ProductList productList={fullList} />
    </div>
  );
};

export default AdminProduct;