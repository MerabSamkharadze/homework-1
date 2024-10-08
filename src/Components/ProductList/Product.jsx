"use client";

import "./ProductList.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import Product from "../Product/Product";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}
