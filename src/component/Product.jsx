import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/useCart"

const Product = ({image,name,price,dec,id}) => {
  const {addToCart} = useCart();

  const location = useLocation();

  const isAdmin = location.pathname.includes("/admin/product");

  const handleAddToCart = ()=>{
    const product = {image,name,price,dec,id}
    addToCart(product);
  }

  return (
    <div className="bg-gray-200 w-[300px] rounded-xl flex flex-col p-3 items-center">
      <img src={image} className="w-[90%] h-52 rounded-xl" alt="product-image" />
      <div className="mt-3  w-full">
        <h2 className="font-bold text-xl w-full truncate whitespace-nowrap overflow-hidden">{name}</h2>
        <p> <span className="font-bold ">Price :- </span> $ {price}</p>
        <p className="w-full truncate whitespace-nowrap overflow-hidden mb-1">{dec}</p> 
        <div className="flex gap-2">
          {
            !isAdmin &&
            <Link to={`/${id}`}><button className="border bg-gray-800 text-white p-2 rounded-lg cursor-pointer">View Detail</button></Link>
          }
          {
            !isAdmin && <button className="border bg-gray-800 text-white p-2 rounded-lg cursor-pointer" onClick={handleAddToCart}>Add to cart</button>
          }
          {
            isAdmin && <button className="border bg-gray-800 text-white px-4 rounded-lg cursor-pointer">Edit</button>
          }
                    {
            isAdmin && <button className="border bg-gray-800 text-white p-2 rounded-lg cursor-pointer" >Delete</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Product;