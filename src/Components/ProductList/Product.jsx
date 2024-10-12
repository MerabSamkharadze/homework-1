"use client";

import { useState, useEffect } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import Link from "next/link";

export default function ProductList({ products }) {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOption, setSortOption] = useState(""); // სორტირების პარამეტრი

  // სორტირების ფუნქცია
  useEffect(() => {
    let sorted = [...products]; // ვაკოპირებთ პროდუქტებს სორტირებისთვის
    if (sortOption === "priceAsc") {
      sorted.sort((a, b) => a.price - b.price); // ფასის ზრდადობით
    } else if (sortOption === "priceDesc") {
      sorted.sort((a, b) => b.price - a.price); // ფასის კლებადობით
    } else if (sortOption === "nameAsc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title)); // სახელი ზრდადობით
    } else if (sortOption === "nameDesc") {
      sorted.sort((a, b) => b.title.localeCompare(a.title)); // სახელი კლებადობით
    }
    setSortedProducts(sorted); // განახლებული სია
  }, [sortOption, products]);

  return (
    <div className="container">
      {/* სორტირების ფანელი */}
      <div className="sort-options">
        <label>Sort By: </label>
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Select...</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
        </select>
      </div>

      {/* პროდუქტების სია */}
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <Link
            className="Link"
            href={`/products/${product.id}`}
            key={product.id}
          >
            <Product
              title={product.title}
              description={product.description}
              image={product.thumbnail}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
