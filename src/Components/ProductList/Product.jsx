"use client";

import "./ProductList.css";
import Product from "../Product/Product";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function ProductList({ products, onSearch }) {
  return (
    <div className="container">
      <div className="sort-controls">
        <Link href="/products?sortBy=title&order=asc" className="sort-link">
          Sort by Title (Asc)
        </Link>
        <Link href="/products?sortBy=title&order=desc" className="sort-link">
          Sort by Title (Desc)
        </Link>
        <Link href="/products?sortBy=price&order=asc" className="sort-link">
          Sort by Price (Asc)
        </Link>
        <Link href="/products?sortBy=price&order=desc" className="sort-link">
          Sort by Price (Desc)
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />

      <div className="product-grid">
        {products.map((product) => (
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
