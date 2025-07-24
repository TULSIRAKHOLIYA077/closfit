import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProductDetailPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState("");

  const fetchDetail = async () =>{
    const productDetail = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await productDetail.json();
    setProduct(json);
  }
  console.log(product);

  useEffect(()=>{
    fetchDetail();
  },[])
  
   if (!product) return <p className="pt-40">Loading...</p>;

  return (
    <div className="pt-32 min-h-screen max-h-fit">
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
              <button className="border bg-gray-800 text-white p-2 rounded-lg cursor-pointer">Add to cart</button>
            </div>
      </div>
    </div>
  )
}

export default ProductDetailPage