
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const isEditMode = Boolean(id);

  const { productItems } = useSelector((state) => state.product);

  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditMode && productItems.length) {
      const existingProduct = productItems.find(
        (product) => product.id.toString() === id.toString()
      );
      if (existingProduct) {
        setForm({
          title: existingProduct.title || "",
          price: existingProduct.price || "",
          image: existingProduct.image || "",
          description: existingProduct.description || "",
        });
      }
    }
  }, [id, isEditMode, productItems]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.image || !form.description) {
      setError("Please fill in all fields.");
      return;
    }

    if (isEditMode) {
      dispatch(updateProduct({ id, updatedProduct: form }));
    } else {
      dispatch(addProduct(form));
    }

    navigate("/admin/product");
  };

  return (
    <div className="min-h-screen bg-gray-200 pt-40 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">
          {isEditMode ? "Edit Product" : "Add Product"}
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            {isEditMode ? "Update" : "Add"} Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
