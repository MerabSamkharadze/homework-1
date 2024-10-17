import React from "react";
import "./Product.css";
import Button from "../Button/Button";
import Image from "next/image";

export default function Product({ title, description, image, price }) {
  return (
    <div className="product">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="product-image"
      />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="price">$ {price}</div>
      <Button content={"Add to Cart"}></Button>
    </div>
  );
}
