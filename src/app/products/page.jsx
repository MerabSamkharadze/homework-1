import ProductList from "@/Components/ProductList/Product";

import "./page.css";

async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Content() {
  const products = await getProducts();

  return (
    <div className="main-container">
      <ProductList products={products} />
    </div>
  );
}
