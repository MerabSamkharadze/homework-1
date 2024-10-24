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
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={updatedProduct.title}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        name="description"
        placeholder="Product Description"
        value={updatedProduct.description}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={updatedProduct.price}
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="update-button">
        Update Product
      </button>
    </form>
  );
}
