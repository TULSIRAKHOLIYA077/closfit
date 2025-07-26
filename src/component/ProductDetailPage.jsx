import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useProductData } from "../context/ProductDataContext";
import { useCart } from "../context/useCart";

const ProductDetailPage = () => {
  const {id} = useParams();
  const { customProducts } = useProductData();
  const [product, setProduct] = useState("");
  const { addToCart } = useCart();
  
  useEffect(()=>{
    const localProduct = customProducts.find(p => p.id == id); 

    if (localProduct) {
      setProduct(localProduct);
    } else {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.log("Error fetching from API", err));
    }
  },[id, customProducts])
  
  if (!product) {
    return (
      <div className="flex justify-center items-center pt-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
      dec: product.description,
    };
    addToCart(item);
  };

  return (
    <div className="min-h-screen max-h-fit pt-30">
      <div className="bg-gray-200 w-[600px] rounded-xl flex flex-col p-3 items-center m-auto">
        <div className="flex items-center gap-5">
          <img src={product.image} className="w-[40%] rounded-xl" alt="product-image" />
          <div className="mt-3  w-full">
            <h2 className="font-bold text-xl ">{product.title}</h2>
            {
              product?.rating?.rate && <p> <span className="font-bold ">Rate :- </span> {product.rating.rate}</p>
            }
            <p> <span className="font-bold ">Price :- </span> $ {product.price}</p>
            {
              product?.category && <p> <span className="font-bold ">Category :- </span> {product.category	}</p>
            }
          </div>
        </div>
            <p className="mb-1 mt-3">{product.description}</p> 
            <div className="flex gap-2">
              <button className="border bg-gray-800 text-white p-2 rounded-lg cursor-pointer" onClick={handleAddToCart}>Add to cart</button>
            </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
