import ProductList from "@/Components/ProductList/ProductList";
import "./page.css";

async function getProducts(searchTerm = "", sortBy = "title", order = "asc") {
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
