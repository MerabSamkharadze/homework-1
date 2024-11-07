import { useState } from "react";
import "./UpdateProductForm.css";

export default function UpdateProductForm({ product, onSubmit }) {
  const [updatedProduct, setUpdatedProduct] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...product, ...updatedProduct });
  };

  return (
    <form
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-opacity-35 bg-gray-800 backdrop-blur-lg p-5 rounded-lg shadow-lg w-[60rem]"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-5 text-2xl text-white text-center">Edit Product</h2>
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={updatedProduct.title}
        onChange={handleChange}
        className="mb-4 p-2 text-base text-black border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      />
      <input
        type="text"
        name="description"
        placeholder="Product Description"
        value={updatedProduct.description}
        onChange={handleChange}
        className="mb-4 p-2 text-base border text-black border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={updatedProduct.price}
        onChange={handleChange}
        className="mb-4 p-2 text-base border text-black border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white text-base rounded-md hover:bg-blue-700"
      >
        Update Product
      </button>
    </form>
  );
}
