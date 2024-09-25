import React from "react";
import "./Content.css";
import ProductList from "../ProductList/ProductList";

export default function Content() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is Product 1",
      image: "/img/product1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is Product 2",
      image: "/img/product2.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is Product 3",
      image: "/img/product3.jpg",
    },
  ];

  return (
    <main className="main-container">
      <ProductList products={products} />
    </main>
  );
}
