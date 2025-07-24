import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useProductData } from "../context/ProductDataContext";

const AddProductPage = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductData();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });

  const [error, setError] = useState("");

  const handleEvent = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e)=>{
     e.preventDefault();
    if(!form.title || !form.price || !form.description || !form.image){
      setError("Please fill all fields");
      return;
    }

    if(!form.image.includes("https://")){
      setError("Use image URL");
      return;
    }

    if (isNaN(form.price)) {
      setError("Price must be a number");
      return;
    }

    addProduct(form);
    alert("Product added!");
    navigate("/");
  }
  return (
    <div className=" pt-30 h-screen">
      <form onSubmit={handleSubmit} className=" bg-gray-50 w-[500px] py-4 px-10 m-auto flex flex-col rounded">
        <h2 className="text-2xl font-bold text-center mb-3">Add New Product</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text" 
            name="title"
            onChange={handleEvent} 
            placeholder="Product Title"
            value={form.title}
            className="border p-2 rounded"
          />

          <input
            type="text" 
            name="price"
            onChange={handleEvent} 
            placeholder="Price"
            value={form.price}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleEvent}
            className="border p-2 rounded"
          />

          <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleEvent}
          className="border p-2 rounded"
          ></textarea>

          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold text-lg cursor-pointer">Submit</button>
        </div>

        {error && <p className="text-red-700 text-center mt-2">{error}</p>}
      </form>
    </div>
  )
}

export default AddProductPage