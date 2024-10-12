import ProductList from "@/Components/ProductList/Product";
import "./page.css";

async function getProducts(sortBy = "title", order = "asc") {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`
    );
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Content({ searchParams }) {
  const sortBy = searchParams?.sortBy || "title";
  const order = searchParams?.order || "asc";

  const products = await getProducts(sortBy, order);

  return (
    <div className="main-container">
      <ProductList products={products} />
    </div>
  );
}
