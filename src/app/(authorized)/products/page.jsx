"use client";
import ProductList from "@/Components/ProductList/Product";
import "./page.css";
import useAuth from "@/app/hooks/useAuth";

async function getProducts(searchTerm = "", sortBy = "title", order = "asc") {
  useAuth("/products");
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}&sortBy=${sortBy}&order=${order}`
    );
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Content({ searchParams }) {
  const searchTerm = searchParams?.search || "";
  const sortBy = searchParams?.sortBy || "title";
  const order = searchParams?.order || "asc";

  const products = await getProducts(searchTerm, sortBy, order);

  return (
    <div className="main-container">
      <ProductList products={products} />
    </div>
  );
}
