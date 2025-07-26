import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductData } from "../context/ProductDataContext";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fullList, editProduct } = useProductData();

  const productToEdit = fullList.find((p) => String(p.id) === id);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    if (productToEdit) {
      setForm({
        title: productToEdit.title,
        price: productToEdit.price,
        description: productToEdit.description,
        image: productToEdit.image
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.description || !form.image) {
      alert("Please fill all fields");
      return;
    }
    editProduct({ ...form, id: Number(id) });
    alert("Product updated!");
    navigate("/admin/product");
  };

  return (
    <div className="pt-30 h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 w-[500px] py-4 px-10 m-auto flex flex-col rounded"
      >
        <h2 className="text-2xl font-bold text-center mb-3">Edit Product</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold text-lg cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
