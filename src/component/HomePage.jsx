import { useEffect, useState } from "react"
import ProductList from "./ProductList";
import { useProductData } from "../context/ProductDataContext";

const HomePage = () => {
  const [data, setData] = useState("");

  const { customProducts } = useProductData();

  const fetchData = async ()=>{
    const productData = await fetch("https://fakestoreapi.com/products");
    const json = await productData.json();
    setData(json);
  }
  console.log(data);
  
  useEffect(()=>{
    fetchData();
  },[])

  const fullList = [...data,...customProducts];

  return (
    <div className="bg-gray-400 relative z-10 pt-40 min-h-screen max-h-fit">
      <ProductList productList={fullList}/>
    </div>
  )
}

export default HomePage