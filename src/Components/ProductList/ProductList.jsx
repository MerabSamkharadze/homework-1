import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          onAddToCart={() => console.log(`${product.title} added to cart`)}
        />
      ))}
    </div>
  );
}

export default ProductList;
