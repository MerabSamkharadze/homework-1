"use client";

import "./ProductList.css";
import Product from "../Product/Product";
import { useRouter } from "next/navigation";
import SearchBar from "../SearchBar/SearchBar";

export default function ProductList({ products, onSearch }) {
  const router = useRouter();

  const handleSort = (event) => {
    const [sortBy, order] = event.target.value.split("-");
    router.push(`/products?sortBy=${sortBy}&order=${order}`);
  };

  return (
    <div className="container">
      <div className="sort-container">
        <div className="sort-controls">
          <select className="sort-select" onChange={handleSort}>
            <option value="title-asc">Sort by Title (Asc)</option>
            <option value="title-desc">Sort by Title (Desc)</option>
            <option value="price-asc">Sort by Price (Asc)</option>
            <option value="price-desc">Sort by Price (Desc)</option>
          </select>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="Link"
            onClick={() => router.push(`/products/${product.id}`)}
            key={product.id}
          >
            <Product
              title={product.title}
              description={product.description}
              image={product.thumbnail}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
