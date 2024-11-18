import { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleAddNewProduct = async () => {
    const { title, description, price } = newProduct;

    if (!title || !description || !price || Number(price) <= 0) {
      setError("All fields are required and price must be positive.");
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price: parseFloat(price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add the product.");
      }

      const data = await response.json();
      const newProductWithId = { ...data, id: Date.now() };

      setNewProduct({ title: "", description: "", price: "" });

      toggleFormVisibility();
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleFormVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleFormVisibility} className="toggle-button">
        {isVisible ? "Hide Form" : "Add New Product"}
      </button>

      {isVisible && (
        <div className="form-container33">
          <h2>Add New Product</h2>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={newProduct.title}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="description"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={handleChange}
            className="form-input"
            min="0"
          />
          <button onClick={handleAddNewProduct} className="add-button">
            Add Product
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
}
