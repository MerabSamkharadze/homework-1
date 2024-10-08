import React from "react";
import "./Product.css";
import Button from "../Button/Button";

export default function Product({ title, description, image, price }) {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="price">$ {price}</div>
      <Button content={"Add to Cart"}></Button>
    </div>
  );
}
