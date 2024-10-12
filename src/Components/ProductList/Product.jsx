"use client";

import "./ProductList.css";
import Product from "../Product/Product";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function ProductList({ products }) {
  return (
    <div className="container">
      <div className="sort-controls">
        <Link href="/products?sortBy=title&order=asc" className="sort-link">
          Sort by Title (Ascending)
        </Link>
        <Link href="/products?sortBy=title&order=desc" className="sort-link">
          Sort by Title (Descending)
        </Link>
        <Link href="/products?sortBy=price&order=asc" className="sort-link">
          Sort by Price (Ascending)
        </Link>
        <Link href="/products?sortBy=price&order=desc" className="sort-link">
          Sort by Price (Descending)
        </Link>
      </div>

      <SearchBar />
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