import { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNewProduct = () => {
    const updatedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const newProductWithId = { ...newProduct, id: Date.now() };
    updatedProducts.push(newProductWithId);

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setNewProduct({
      title: "",
      description: "",
      price: "",
    });

    if (onAddProduct) {
      onAddProduct(newProductWithId);
    }
    toggleFormVisibility();
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
          />
          <button onClick={handleAddNewProduct} className="add-button">
            Add Product
          </button>
        </div>
      )}
    </div>
  );
}
