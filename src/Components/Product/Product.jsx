import React from "react";
import "./Product.css";

export default function Product({ title, description, image, onAddToCart }) {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <button onClick={onAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}
